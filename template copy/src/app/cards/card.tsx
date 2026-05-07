// https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/ui-components/standard-components/inline
// https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/fetching-data

import React, { useState } from "react";
import { hubspot, LoadingSpinner, Spacer, ErrorState, Flex, Heading, TextArea, Link, Text, Button, Inline, Tile } from '@hubspot/ui-extensions';
import { useCrmProperties, useAssociations } from '@hubspot/ui-extensions/crm';

hubspot.extend<'crm.record.tab'>(({ context }) => (
  <Card context={context} />
));

const url = 'https://34.130.96.44.nip.io/webhook';

const Card = ({ context }) => {
  const [responseJson, setResponseJson] = useState<string>("");

  const { properties: contact, isLoading: contactsLoading, error: contactsError } = useCrmProperties([
    'firstname',
    'lastname',
    'email',
    'hs_object_id',
  ]);

  const { results: dealResults, isLoading: dealsLoading, error: dealsError } = useAssociations({
    toObjectType: '0-3',
    pageLength: 100,
    properties: [
      'hs_object_id',
      'dealname',
      'hubspot_owner_id',
    ],
  });

  if (contactsLoading) return <LoadingSpinner label="Loading..." />;
  if (contactsError) return <ErrorState title="Error"><Text>{contactsError.message}</Text></ErrorState>;
  if (dealsLoading) return <LoadingSpinner label="Loading messages..." />;
  if (dealsError) return <ErrorState title="Error"><Text>{dealsError.message}</Text></ErrorState>;

  const deals = (dealResults?.map(r => r.properties) ?? []);

  const appCardDocsLink =
    'https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/app-cards/overview';

  async function buttonClick(
    contact: Record<string, string | null>,
    deals: Record<string, string | null>[],
    setResponseJson: (val: string) => void
  ) {
    console.log("Button clicked!");
    setResponseJson("Loading...");
    try {
      const response = await hubspot.fetch(url, {
        timeout: 2_000,
        method: "POST",
        body: {contact, deals},
      });
      console.log("Server response:", response.status);
      const data = await response.json();
      console.log(data);
      setResponseJson(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Something went wrong", err);
      setResponseJson(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return (
    <>
      <Heading>Hi {context.user.firstName}!</Heading>
      <Spacer size="extra-small" />
      <Text>This is a template app card.  It's just an example of some things you can do with an app card.  This app card can run 100% for free on a free HubSpot account.</Text>
      <Text>The button below sends a POST request to {url}, and sends the contact and associated deal data.</Text>

      <Tile>
        <Inline gap="extra-small">
          <Text format={{ fontWeight: "bold" }}>Contact:</Text>
          <Text>{contact.firstname} {contact.lastname} ({contact.email})</Text>
        </Inline>
        <Spacer size="medium" />
        <Flex direction="column">
          <Text format={{ fontWeight: "bold" }}>Deals:</Text>
          {deals.map(d => {
            const hs_deal_id = d.hs_object_id ?? "";
            const hs_deal_name = d.dealname ?? "";
            return (
              <Text>{hs_deal_name} ({hs_deal_id})</Text>
            );
          })}
        </Flex>
      </Tile>

      <Tile>
        <Flex justify="center">
          <Button onClick={() => buttonClick(contact, deals, setResponseJson)}>
            Click Me
          </Button>
        </Flex>
        <TextArea
          label="Response"
          name="response"
          value={responseJson}
          resize="vertical"
          rows={10}
        />
      </Tile>
    </>
  );
};