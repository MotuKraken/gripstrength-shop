# GripStrength Shop

First premium storefront proposal for the BOMIKO multi-shop system.

## Concept
A focused microsite for grip strength, wrists, forearms and combat-oriented hand tools.

## Why this niche first
- Narrow enough to look premium instead of generic
- Strong conversion angle via progression and specificity
- Easy to curate into a small high-end catalog
- Good fit for later Shopify collection/tag mapping

## Proposed live URL
- Primary: `gripstrengthshop.bomiko.de`
- Cleaner alternative: `grip.bomiko.de`
- Brand-forward alternative: `griplab.bomiko.de`

Recommendation: `grip.bomiko.de` for elegance, with `gripstrengthshop.bomiko.de` redirecting to it.

## Current blocker to live deploy
`bomiko.de` is currently parked at Hostinger and not yet wired to an active site/deployment zone.

## Deployment path
1. Push this folder to its own GitHub repo
2. Connect repo to Cloudflare Pages
3. Add subdomain DNS record for `grip.bomiko.de` or `gripstrengthshop.bomiko.de`
4. Point subdomain to Cloudflare Pages project
5. After Shopify API access is stabilized, wire product data and checkout

## Shopify integration plan
- Collection/tag target: `shop:gripstrength`
- Storefront API or Buy Button/checkout link
- Initial collection/products:
  - Adjustable Grip Press
  - Wrist Roller Pro
  - Grip Block Carry
  - Strength / Combat / Resilience bundles

## Immediate next steps
- Create dedicated repo
- Push code
- Prepare Cloudflare Pages-compatible static deployment
- Add product data adapter once Shopify access is stable
