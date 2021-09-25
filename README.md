(c) 2021 yonah aviv
![](static/localhost_3000_.png)

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!


```bash
# create a new project in the current directory
pnpm init svelte@next



# create a new project in my-app
pnpm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
pnpm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

# Yonah's Additional Information

## To customize
1. Edit [config.Portfolio.ts](src/lib/config.Portfolio.ts)
2. Your good 😁
## To deploy
1. First, clone the repo.
2. Then, change the info in gh-pages.js to match the new repo, and fill in your name, email, etc.
3. Then, in the terminal: `pnpm run deploy`
