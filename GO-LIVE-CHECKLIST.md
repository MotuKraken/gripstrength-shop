# GripStrength Shop - Go Live Checklist

## Done
- niche chosen
- premium storefront built
- repo created and pushed
- phase 2 catalog/config/runtime layer added
- Cloudflare Pages config prepared

## Remaining external dependencies
### 1. Cloudflare auth
Need one of:
- `wrangler login`
- or `CLOUDFLARE_API_TOKEN`

### 2. Pages project
Create / verify project:
- `gripstrength-shop`

### 3. DNS / domain
`bomiko.de` must be actively managed, not parked.
Need custom domain setup:
- `grip.bomiko.de`
- optional alias: `gripstrengthshop.bomiko.de`

## Commands once auth exists
```bash
cd /Users/petermettler/.openclaw/workspace/shops/gripstrength-shop
npx wrangler pages deploy . --project-name gripstrength-shop
```

## After successful deploy
Attach custom domain in Cloudflare Pages:
- `grip.bomiko.de`
- optional redirect alias

## Shopify connection sequence
1. launch static storefront
2. attach buy-button or checkout links
3. switch to Storefront API when stable
