# GripStrength Shop Deployment Plan

## Current state
- Frontend built as static microsite
- Product and bundle content now driven by `catalog.js`
- Shop/runtime config separated in `config.js`
- Repo live: `https://github.com/MotuKraken/gripstrength-shop`

## Live target
- Preferred: `grip.bomiko.de`
- Redirect alias: `gripstrengthshop.bomiko.de`

## Current blocker
`bomiko.de` is currently parked at Hostinger. Before subdomain go-live, DNS must be actively managed and pointed to a real deployment target.

## Recommended deployment path
1. Connect repo to Cloudflare Pages
2. Build command: none
3. Output directory: `/`
4. Project type: static site
5. Verify preview deployment
6. In Cloudflare DNS, add custom domain:
   - `grip.bomiko.de`
7. Optional redirect alias:
   - `gripstrengthshop.bomiko.de`
8. After Shopify access stabilizes, replace mock product CTAs with real collection/product/checkout links

## Shopify wiring options
### Option A - fastest
Use Shopify Buy Button / product checkout links.
- Minimal complexity
- Good enough for first curated microsite

### Option B - cleaner
Use Shopify Storefront API.
- Real collection/product fetching
- Better long-term multi-shop model
- Needs Storefront token

## Recommended sequence
- First live: static microsite + mock/product reservation CTAs
- Second live: Buy-button checkout links
- Third live: Storefront API + dynamic collection data
