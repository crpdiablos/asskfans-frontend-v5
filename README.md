# AsskFans Frontend v5 (Stripe + PayPal + Cams/Videos + Custom Amounts)

Deploy-ready Next.js app with:
- Stripe + PayPal checkout (frontend wired, backend endpoints required)
- Custom tip amounts (quick presets + free entry)
- Cams & Videos pages powered by a simple config file (`src/config/site.ts`)
- Nav/Footer/Hero/CreatorGrid/TipCard/FAQ/Toast + basic branding hooks
- Tailwind CSS
- Success/Cancel routes and 404

## Deploy (Vercel)
1) Push this folder to a GitHub repo OR drag the folder into Vercel → New Project.
2) Add env var in Vercel → Settings → Environment Variables:
   - `NEXT_PUBLIC_API_URL = https://workspace.crpdiablos.repl.co`
3) Deploy.

## Backend (Replit) Checklist
- CORS includes: `https://asskfans.com, https://www.asskfans.com, https://asskfans.vercel.app, http://localhost:3000`
- Stripe: 
  - `STRIPE_SUCCESS_URL=https://asskfans.com/tip/success`
  - `STRIPE_CANCEL_URL=https://asskfans.com/tip/cancel`
  - Live keys + webhook at `/api/stripe/webhook` with `STRIPE_WEBHOOK_SECRET`.
- PayPal route required: POST `/api/paypal/create-order` returns `{ approveUrl }`. (I can supply server code.)

## Customizing cams/videos links
Edit `src/config/site.ts` → `camsLinks` and `videoLinks`. Add any URLs you want; they show up automatically.

## Local Dev
```bash
npm install
cp .env.local.example .env.local
npm run dev
```
Open http://localhost:3000
