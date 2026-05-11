# React Analytics Dashboard Folder Structure

This project uses a scalable JavaScript-first React structure for a Vite analytics dashboard with Tailwind CSS, Framer Motion, and Recharts.

```text
src/
  assets/
    images/
  components/
    charts/
    common/
      ui/
    dashboard/
    layout/
  data/
  hooks/
  pages/
  styles/
  utils/
  App.jsx
  main.jsx
```

## Folder Purpose

`src/assets/`
Stores static frontend assets such as images, logos, icons, and illustrations. The `images/` folder keeps bitmap assets separate from source components.

`src/components/`
Contains reusable React components grouped by responsibility. This keeps the UI modular as the dashboard grows.

`src/components/common/`
Shared components that are not specific to one feature, such as cards, section headers, empty states, badges, or loading indicators.

`src/components/common/ui/`
Small primitive UI building blocks. These should stay generic and reusable across pages and features.

`src/components/charts/`
Chart components built with Recharts. Keeping charts separate makes it easier to reuse analytics visualizations and swap chart data without affecting layout code.

`src/components/dashboard/`
Dashboard-specific feature components such as metric cards, activity lists, report panels, and insight widgets.

`src/components/layout/`
Application shell components such as the sidebar, top header, and responsive dashboard layout. This keeps page content separate from navigation and frame structure.

`src/data/`
Mock data, static datasets, and later API response fixtures. In a larger app this folder can evolve into API adapters or be paired with a services layer.

`src/hooks/`
Reusable React hooks for fetching, transforming, or composing state. The example `useDashboardData` hook isolates dashboard data access from the page component.

`src/pages/`
Route-level screens. Each page composes layout, feature components, hooks, and data into a complete view.

`src/styles/`
Global styles and Tailwind entry files. Component-level styling should mostly stay inside JSX via Tailwind utilities, while global resets live here.

`src/utils/`
Pure helper functions such as formatters, calculations, chart helpers, and shared constants.

## Scaling Notes

- Add `src/services/` when real API clients are introduced.
- Add `src/context/` or `src/store/` when shared application state grows beyond local hooks.
- Add feature folders such as `src/features/reports/` if a domain becomes large enough to own its components, hooks, and data together.
