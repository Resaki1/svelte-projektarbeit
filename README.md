# Projektarbeit

This project was part of my master's program and the goal was to explore [Svelte](https://github.com/sveltejs/svelte) / [SvelteKit](https://github.com/sveltejs/kit). The use case I chose was to create a clone of the intranet of the [HKA](https://www.h-ka.de/).

<br />

# [Demo](https://svelte-projektarbeit.pages.dev/iwii/info/bulletinboard)

<br />

### About Svelte

```
Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
```

([From the Svelte Website](https://svelte.dev/))

```
In short, Svelte is a way of writing user interface components — like a navigation bar, comment section, or contact form — that users see and interact with in their browsers. The Svelte compiler converts your components to JavaScript that can be run to render the HTML for the page and to CSS that styles the page.
```

([From the SvelteKit Website](https://kit.svelte.dev/docs/introduction))

<br />

### Aboute SvelteKit

```
SvelteKit is a framework for rapidly developing robust, performant web applications using Svelte. If you're coming from React, SvelteKit is similar to Next. If you're coming from Vue, SvelteKit is similar to Nuxt.
```

([From the SvelteKit Website](https://kit.svelte.dev/docs/introduction))

<br />

# Getting Started

To run this project on your local machine, you need to have Node.js installed. Clone this repository and run the following commands:

```bash
    cd svelte-projektarbeit
    npm install
    npm start
```

This will start the development server and you can access the application by navigating to http://localhost:5173.

<br />

# Conclusion

## Benefits

- easy setup of project
- nice scaffolding including `ESLint`, `Prettier`, `TypeScript`, `Vite`, and `Playwright`
- automatic registration of `service-workers`
- own [module for service-workers](https://kit.svelte.dev/docs/modules#$service-worker)
- comes with good lighthouse score out of the box (Performance 100, a11y 96, Best Practices 100, SEO 78)
- Server-only modules to hide sensitive data, e.g., API-keys; SvelteKit errors automatically when trying to access these modules
  - also great for SSR and caching API calls for different users -> great performance

<br />

## Drawbacks

- all pages must be called `+page.svelte` which makes it confusing once you have more than one (which is usually the case)
- very small ecosystem and general info online compared to e.g., `React`
- issues with SSR when trying to use third-party components
- Deployment on Cloudflare Pages was more complicated than for an SPA due to the fact that SvelteKit includes a "backend"
  - additional confusion because the SvelteKit backend runs on Node.js locally but on V8 on Cloudflare Pages, which, for example, prevented the use of `Buffer`
- no default service worker, needs to be written manually

<br />

## Lighthouse score comparison

|                   | Performance | Accessibility | Best Practices | SEO | PWA |
| ----------------- | ----------- | ------------- | -------------- | --- | --- |
| Official Intranet | 86          | 78            | 100            | 80  | no  |
| SvelteKit         | 99          | 100           | 100            | 100 | yes |
