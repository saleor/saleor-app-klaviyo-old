# Saleor App x TypeScript Next.js example

Bare bones example app with webhook on product update.

Dashboard App docs: https://docs.saleor.io/docs/dashboard/apps
Dev App docs: https://docs.saleor.io/docs/developer/extending/apps

## Disclaimer

This is not official Saleor project.
Treat this project more as proof of concept, there are no security checks on webhooks and rest of the app is not tested to be released on production.

## Installation

1. You'll need [yarn](https://yarnpkg.com/getting-started/install) to install dependencies.

```
yarn install
```

2. In App directory create file `.env.local`, use `.env.local.sample` as a reference.


3. Add Saleor URI to the `.env.local`. If you don't have running instance of Saleor, you create a [free dev account](https://cloud.saleor.io/) 
or run instance [locally](https://github.com/saleor/saleor-platform)

## How to add app to Saleor?

You can use https://github.com/localtunnel/localtunnel or ngrok to expose your app.

1. Start App dev server

`$ yarn dev`

2. Run `appInstall` mutation from graphql client (MANAGE_APPS permission required!)

```
mutation {
  appInstall(
    input: {
      appName: "Best App"
      manifestUrl: "https://your.app.url"
      permissions: [MANAGE_PRODUCTS]
    }
  ) {
    appInstallation {
      id
      status
      appName
      manifestUrl
    }
    appErrors {
      field
      message
      code
      permissions
    }
  }
}
```

3. That's it! 🦄
