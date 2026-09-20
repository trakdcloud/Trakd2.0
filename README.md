# Trakd 2.0

A minimalist black & white workout tracker built with React + Vite. All workout
history, streaks, PRs, exercise ordering, and progress persist locally in the
browser via `localStorage` — no backend or account required.

## Program (Trakd 2.0)

| Day       | Workout            |
| --------- | ------------------ |
| Sunday    | Upper 1            |
| Monday    | Rest               |
| Tuesday   | Lower              |
| Wednesday | Rest               |
| Thursday  | Upper 2            |
| Friday    | Shoulder + Arms    |
| Saturday  | Rest               |

Workouts logged under the old Push / Pull / Legs / Chest & Back days stay in History,
Progress and the streak; they just no longer appear as day tabs.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo (or use the Vercel CLI:
   `npx vercel` from this folder).
2. In Vercel, import the repo. It will auto-detect the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy. No environment variables are required.

## Data & persistence

All persistence goes through `src/lib/storage.js`, a small `localStorage`
wrapper (namespaced under the `aat:` prefix) that keeps the same async
`get`/`set` shape the app was originally built against. This covers:

- Full workout history (`history`)
- Per-day exercise ordering (`orderCfg:<dayId>`)
- Streak pause dates (`streakPauses`)
- PR baselines per exercise (`prBaseline:<exerciseId>`)

Since it's `localStorage`, data is per-browser/per-device. Use the in-app
Export/Import (Settings menu) to back up or move data between devices.
