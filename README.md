# BuddySpot Marketing Website

Öffentliche Website (DE/EN) für BuddySpot.

## Lokal starten

```bash
npm install
npm run dev
```

- Standard-Port: **3003** (damit die Haupt-App `buddyspot-web` parallel auf 3000 laufen kann).
- Im Browser: **http://localhost:3003** → leitet auf **http://localhost:3003/de** weiter.
- Englisch: **http://localhost:3003/en**

„App öffnen“-Buttons verweisen in **Development** standardmäßig auf **http://localhost:3000** (`buddyspot-web`: `npm run dev`, Port **3000**).

Optional: in `.env.local` setzen, z. B. anderes Port oder Staging:

```bash
NEXT_PUBLIC_BUDDYSPOT_APP_URL=http://localhost:3010
```

In **Production** (Vercel-Build) ist ohne Variable **https://buddyspot.app** voreingestellt.

Anderen Port:

```bash
npx next dev -p 3010
```

## Production

```bash
npm run build
npm run start
```

## Vercel

Root-URL `/` leitet auf `/de` (Standard-Sprache). Keine extra Konfiguration nötig.
