# ঐতিহ্য (Oitijjo) Platform — Implementation Plan

## Overview
A full Next.js web application based on the project report. A digital marketplace that connects traditional Bengali artisans directly to buyers, preserving cultural heritage.

## Tech Stack (from report)
- **Frontend:** Next.js 14 (App Router) + React
- **Styling:** Vanilla CSS (royal nostalgia theme matching oitijjho_products.html)
- **Map:** Leaflet.js
- **Payment UI:** bKash/Nagad mockup
- **Auth:** Mobile OTP + NID Verification UI
- **Media:** Image upload preview

## Pages to Build
1. `/` — Landing page (hero, features, map of artisan regions, heritage products)
2. `/shop` — Product browsing with filter by craft type & region
3. `/artisan/[id]` — Artisan profile with story, products, verification badge
4. `/product/[id]` — Product detail with "কারিগরের গল্প" section
5. `/become-artisan` — Artisan onboarding (NID + OTP form)
6. `/cart` — Cart + escrow payment flow

## Proposed Changes

### [NEW] Next.js App
- Initialize with `npx create-next-app@latest`
- Royal Bengali nostalgia theme throughout
- Bengali + English content
