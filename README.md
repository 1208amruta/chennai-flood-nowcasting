# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## UI/UX upgrade + bilingual interface (EN / தமிழ்)

### Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

No new dependencies were added.

### Language system

- `src/i18n/translations.js` — all English + Tamil strings (`en` / `ta`)
- `src/i18n/LanguageContext.jsx` — `useLanguage()` gives `t()`, `tRisk()`, `tPipe()`
- Selected language is saved in `localStorage` under `floodwatch-language`; English is the default
- Numbers, IDs, coordinates, chart axes and OpenStreetMap labels stay untranslated

### Shared simulation state

`src/context/SimulationContext.jsx` holds the rainfall value and exposes the
calculated points, risk counts, peak utilization, overall risk and nowcast, so the
Dashboard, Alerts and Authority pages display the *same* calculated values as the map.
The maths itself (`src/utils/floodRisk.js`, and the drainage/nowcast logic now in
`src/utils/floodData.js`) is unchanged.

> This is an academic/demo simulation system, not an official emergency warning system.
