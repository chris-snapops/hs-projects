import React from 'react';
import {
  Flex,
  Spacer,
  Text,
  Box,
  LoadingSpinner,
  ErrorState,
  Inline,
  TextArea,
} from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';
import { useAssociations } from '@hubspot/ui-extensions/crm';

// ─── Extension entry point ────────────────────────────────────────────────────

hubspot.extend<'crm.record.tab'>(({ context, actions }) => (
  <SMSHistory context={context} actions={actions} />
));

// ─── Types ────────────────────────────────────────────────────────────────────

interface SMSHistoryProps {
  context: unknown;
  actions: unknown;
}

interface MessageBubbleProps {
  body: string;
  time: string;
  isOutgoing: boolean;
}

// ─── Helper functions ─────────────────────────────────────────────────────────

function parseHubSpotDate(val: unknown): Date {
  if (!val) return new Date();
  const num = Number(val);
  if (!isNaN(num) && String(val).length > 10) return new Date(num);
  const d = new Date(String(val));
  return isNaN(d.getTime()) ? new Date() : d;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDateHeader(date: Date): string {
  const today = new Date();
  if (date.toDateString() === today.toDateString()) return 'Today';

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

  return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}

function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function getVisualWidth(str: string): number {
  const widths: Record<string, number> = {
    A: 2.50, B: 2.50, C: 2.50, D: 2.78, E: 2.27, F: 2.27, G: 2.94, H: 2.78, I: 1.19, J: 2.00,
    K: 2.63, L: 2.17, M: 3.13, N: 2.94, O: 2.94, P: 2.27, Q: 2.94, R: 2.50, S: 2.27, T: 2.17,
    U: 2.78, V: 2.50, W: 3.57, X: 2.50, Y: 2.38, Z: 2.38,
    a: 2.00, b: 2.27, c: 2.00, d: 2.38, e: 2.17, f: 1.47, g: 2.17, h: 2.17, i: 1.02, j: 0.88,
    k: 2.00, l: 0.83, m: 3.33, n: 2.17, o: 2.27, p: 2.27, q: 2.27, r: 1.39, s: 1.79, t: 1.39,
    u: 2.17, v: 2.17, w: 2.94, x: 2.00, y: 2.08, z: 1.72,
    ' ': 1.00, '.': 0.80, ',': 0.80, ':': 0.90, ';': 0.90, '!': 1.00, '?': 2.00, "'": 0.80,
    '"': 1.40, '-': 1.30, '–': 2.00, '—': 2.80, '(': 1.30, ')': 1.30, '[': 1.30, ']': 1.30,
    '/': 1.50, '|': 0.70,
  };
  return [...str].reduce((acc, char) => acc + (widths[char] ?? 2.27), 0) * 0.52 - 2;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const MessageBubble = ({ body, time, isOutgoing }: MessageBubbleProps) => {
  const lines = body.split('\n');
  const maxVisualWidth = Math.max(...lines.map(getVisualWidth));
  const cols = Math.min(Math.ceil(maxVisualWidth), 50) || 1;
  const rows = Math.min(
    lines.reduce((acc, l) => acc + Math.max(1, Math.ceil(getVisualWidth(l) / cols)), 0),
    20,
  );

  const timeLabel = <Text variant="microcopy">{time}</Text>;

  return (
    <Inline justify={isOutgoing ? 'end' : 'between'} align="end">
      <Inline align="end" gap="extra-small">
        <TextArea label="" name="" cols={cols} rows={rows} resize="none" readOnly value={body} />
        {timeLabel}
      </Inline>
    </Inline>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const SMSHistory = ({ context, actions }: SMSHistoryProps) => {
  const { results, isLoading, error } = useAssociations({
    toObjectType: '0-18',
    pageLength: 100,
    properties: [
      'hs_communication_body',
      'hs_communication_channel_type',
      'hs_timestamp',
      'communication_direction',
      'hubspot_owner_id',
    ],
  });

  if (isLoading) return <LoadingSpinner label="Loading messages..." />;
  if (error) return <ErrorState title="Error"><Text>{error.message}</Text></ErrorState>;

  const smsMessages = (results ?? [])
    .filter((r) => r.properties.hs_communication_channel_type === 'SMS')
    .sort((a, b) =>
      parseHubSpotDate(b.properties.hs_timestamp).getTime() -
      parseHubSpotDate(a.properties.hs_timestamp).getTime(),
    );

  if (smsMessages.length === 0) {
    return (
      <Flex direction="column" alignItems="center" padding="medium">
        <Text>No SMS history found.</Text>
      </Flex>
    );
  }

  let lastDateHeader = '';

  return (
    <Flex direction="column" gap="extra-small">
      {smsMessages.map((msg) => {
        const date = parseHubSpotDate(msg.properties.hs_timestamp);
        const dateHeader = formatDateHeader(date);
        const showSeparator = dateHeader !== lastDateHeader;
        if (showSeparator) lastDateHeader = dateHeader;

        const isOutgoing = msg.properties.communication_direction === 'OUTBOUND';
        const body = stripHTML(
          (msg.properties.hs_communication_body ?? '')
            .replaceAll('</p><p style="margin:0;">', '\n'),
        );

        return (
          <Box key={msg.toObjectId}>
            {showSeparator && (
              <>
              <Spacer size="small" />
              <Inline justify="center">
                <Text format={{ fontWeight: 'bold' }}>{dateHeader}</Text>
              </Inline>
              </>
            )}
            <MessageBubble body={body} time={formatTime(date)} isOutgoing={isOutgoing} />
          </Box>
        );
      })}
    </Flex>
  );
};