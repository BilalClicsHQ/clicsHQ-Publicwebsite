# Polar — Payments Guide for clicsHQ

**Polar (polar.sh)** = the payment platform we will use to sell clicsHQ plans. It handles cards, subscriptions, and all international taxes for us.

---

## What We Can Use It For

| Feature | Use for clicsHQ |
|---------|----------------|
| Subscriptions (monthly/yearly) | Our Teams $12/mo plan |
| One-time payments | Any single purchase |
| Hosted checkout page | Customer clicks "Get Started" → Polar checkout opens |
| Customer portal | Customers manage/cancel their own plan themselves |
| Automatic tax (VAT/GST) | Polar handles taxes in every country — zero paperwork for us |
| Usage-based billing | If we ever charge per-use (AI credits etc.) |
| License keys / file access | Not needed now, available free |

**Important:** ALL features are available on every plan — even the free one. Plans only change the **fee per sale** and **support speed**.

---

## Free vs Paid — What's the Difference?

| Plan | Monthly | Fee per sale | Support |
|------|---------|-------------|---------|
| **Starter** | **Free** | 5% + $0.50 | Standard |
| Pro | $20 | 3.8% + $0.40 | Priority |
| Growth | $100 | 3.6% + $0.35 | Priority |
| Scale | $400 | 3.4% + $0.30 | Priority + Slack |

**When to upgrade?** Pro only saves money after ~**$1,400/month in sales**. Below that, Free is cheaper.

> ✅ **Best for us: start on the FREE Starter plan.** Same features, no monthly cost. Upgrade to Pro only when sales cross ~$1,400/month.

---

## How to Set It Up (5 Simple Steps)

1. **Create account** at polar.sh → create organization "clicsHQ"
2. **Submit verification** (business details) — approval takes ~2 weeks, so do this FIRST
3. **Create products** in dashboard: Free plan, Teams $12/month (+ yearly price), Enterprise
4. **Test in Sandbox** — Polar gives a full test mode with fake cards, nothing real is charged
5. **Connect to website** — official Next.js plugin (our exact technology); "Get Started" buttons open Polar checkout. ~1–2 days of work.

---

## Quick Facts

- ✅ Pays out to **Pakistan & UAE** bank accounts
- ✅ Customers can pay by card from anywhere in the world
- ✅ Used by Tailwind CSS, Midday and other known companies
- ⚠ Verification wait ~2 weeks → apply early
- ⚠ Dispute fee $15 each
- ⚠ Digital products only (fine — we are SaaS)
