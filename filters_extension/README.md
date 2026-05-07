# HubSpot Filter Copier

A Chrome extension that detects the active filters on any HubSpot list view and copies a shareable URL to your clipboard — so you can send someone a link that opens HubSpot with the exact same filters applied.

Works on Contacts, Companies, Deals, and any other CRM object type. Supports all filter operators including date ranges, rolling date ranges, list filters, association filters, and more.

## Usage

1. Open a HubSpot list view (Contacts, Companies, Deals, etc.)
2. Apply filters using the Advanced Filters panel or quick filter buttons
3. Click the **Filter Copier** extension icon
4. Click **Copy Shareable URL**
5. Paste the link anywhere — opening it will load HubSpot with the same filters active

## Installation

### From the Chrome Web Store

Search for **HubSpot Filter Copier** in the [Chrome Web Store](https://chrome.google.com/webstore) and click Install.

### Manual install (developer mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked** and select the `app/` folder
5. The extension icon will appear in your toolbar

## How it works

The extension intercepts HubSpot's internal GraphQL search requests to read the current filter state in real time. It then constructs a URL using HubSpot's supported `?filters=` query parameter format, which HubSpot recognises and applies when the link is opened.

No data leaves your browser — see [PRIVACY.md](PRIVACY.md) for details.

## Notes

- The extension only activates on HubSpot list view pages (`/contacts/*/objects/*/views/*/list`)
- The generated URL always uses the "All [objects]" view (`/views/all/list`) so it works for anyone with access to the portal, regardless of their saved views
- For deals (object type `0-3`), redundant `pipeline EQ` filters are automatically removed since HubSpot adds these internally but they break the URL filter format
