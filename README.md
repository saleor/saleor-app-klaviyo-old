# Saleor App x TypeScript Next.js example

Barebones example app with webhook on product update.


Dashboard App docs: https://docs.saleor.io/docs/dashboard/apps
Dev App docs: https://docs.saleor.io/docs/developer/extending/apps

## Disclaimer

This is not official Mirumee project.
Treat this project more as proof of concept, there are no security checks on webhooks and rest of the app is not tested to be released on production.


## Installation

You can use https://github.com/localtunnel/localtunnel to expose your app.

1. In App directory create file `.env.local` containing:
```
NEXT_PUBLIC_APP_DOMAIN=https://your.app.url
SECRET=secret-which-should-be-a-secret
```

2. Configure Saleor URL

https://docs.saleor.io/docs/dashboard/configuration/site#general-information

3. Install App dependencies

`$ yarn`

## How to add app to Saleor?

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
