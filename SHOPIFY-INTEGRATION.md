# Shopify Integration Notes

## Intended collection mapping
- Collection tag: `shop:gripstrength`

## Phase 2 status
The site is prepared for Shopify integration but still runs in mock mode.

## Files involved
- `config.js` → shop/storefront settings
- `catalog.js` → current mock product and bundle data
- `main.js` → renderer and future adapter surface

## First connection strategy
### Stage 1
Manual checkout / buy-button links per product.

### Stage 2
Fetch collection/product data from Shopify Storefront API.

## Required future inputs
- Storefront API token or buy-button URLs
- Product handles or collection handles
- Checkout destination URLs
- Final product imagery / copy

## Current unsolved blocker
Admin/API access path is still unstable due to the OAuth/tunnel situation. Storefront-side connection can proceed once a stable access route or token is available.
