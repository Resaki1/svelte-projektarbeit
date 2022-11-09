# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Projektarbeit

## Benefits

- easy setup of project
- nice scaffolding including ESLint, Prettier, TypeScript, Vite, and Playwright
- automatic registration of service-workers
- own [module for service-workers](https://kit.svelte.dev/docs/modules#$service-worker)
- comes with good lighthouse score out of the box (Performance 100, a11y 96, Best Practices 100, SEO 78)
- Server-only modules to hide sensitive data, e.g., API-keys; SvelteKit errors automatically when trying to access these modules

## Drawbacks

- no default service worker, needs to be written manually
- all pages must be called "+page.svelte" which makes it confusing once you have more than one (which is usually the case)

## Lighthouse score comparison

| hi                | Performance | Accessibility | Best Practices | SEO | PWA |
| ----------------- | ----------- | ------------- | -------------- | --- | --- |
| Official Intranet | 86          | 78            | 100            | 80  | no  |
| SvelteKit         | 99          | 100           | 92             | 100 | yes |
