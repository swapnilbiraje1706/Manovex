# Manovex GitHub Deployment Package

This folder is prepared for a fresh GitHub repository and Netlify deployment.

## Upload To GitHub

Upload all files and folders in this directory:

- `index.html`
- `features/`
- `netlify/`
- `supabase/`
- `netlify.toml`
- `package.json`
- `package-lock.json`
- `.gitignore`
- `.env.example`

Do not upload:

- `.env`
- `node_modules/`
- `.netlify/`

## Netlify Settings

Use these deploy settings:

- Branch: `main`
- Build command: leave empty
- Publish directory: `.`

The Netlify functions are configured in `netlify.toml`.

## Netlify Environment Variables

Add these in Netlify Site settings:

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `SUPABASE_URL`
- `SUPABASE_PUB_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

For test checkout, use Razorpay test keys. For real subscribers, replace them with Razorpay live keys after KYC approval.

## After Deploy

Check the live page source or GitHub `index.html` for this text:

`Use every paid feature from here`

If that text exists, the latest Manovex version is deployed.
