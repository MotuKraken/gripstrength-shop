# Current Cutover Blockers

## Blocker 1 - Cloudflare auth missing
Wrangler is installed, but not authenticated.
Current result:
- `wrangler whoami` => not authenticated
- `wrangler pages project list` => requires `CLOUDFLARE_API_TOKEN` in non-interactive mode

## Blocker 2 - Domain state
`bomiko.de` currently resolves to a Hostinger parked domain page.
This means subdomain cutover to `grip.bomiko.de` cannot complete until DNS is moved / actively managed.

## Impact
The shop code is ready for deployment, but final live go-online at `grip.bomiko.de` is blocked by external account-level access, not by build work.
