This project shows the current error between next-translate and next-redux-wrapper

next-translate: https://github.com/vinissimus/next-translate

next-redux-wrapper: https://github.com/kirill-konshin/next-redux-wrapper


## Error reproduction
1) Start server
2) Open http://localhost:3000/test123 in your browser
3) You should see the following error:
`Error: No router instance found. you should only use "next/router" inside the client side of your app. https://err.sh/zeit/next.js/no-router-instance`
Caused by `router.replace(`/en/${router.query.path.join('/')}`)` in the `[...path].js`

## Available Scripts

### `npm run dev` runs the dev server with next-translate && next dev

### `npm run build` generates the production files

### `npm run start` runs the product server
