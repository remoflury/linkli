# Linkli

This project is a simple link shortener. It is built with SvelteKit and uses a plain mysql db.

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

Then copy the .env.example, rename it to .env and paste in your credentials.

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. Currently, the app is set up to be deployed to Vercel.
