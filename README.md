# Application template

> 🧪 Minimal static application template with deployment to GitHub pages


## Get started

To get started make sure you have the latest version of `nodejs` and `npm` installed. Then run:
```
npm i && npm run watch
```

This will create a local browser-sync instance live refreshing all the changes to the `src/` and copying any `src/assets/*` to `_site/assets`.


## Deployment

1. [Create a secret](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) containing the personal access token, call it `GH_PAT`
2. Push to master and check that the action completed
3. Configure GitHub pages to publish the `gh-pages` branch

## Changelog

- v0.0.0 - Initial template
