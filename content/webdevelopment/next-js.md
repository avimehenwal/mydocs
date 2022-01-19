---
title: Next JS
tags:
  - nextjs
  - bundler
---

# Next JS

<TagLinks />

## New Features in v12

- [New Compiler](https://nextjs.org/docs/advanced-features/compiler) - Replace `babel` with rust based `SWC compiler` (speedy web compiler). **5x** Build time gains
- **Middleware** to Modify response
  - hide external services APIs
  - to add autorization token to make authorized API calls
  - by redirecting
  - by re writing
  - adding headers
  - streaming HTML
  - Features Flags
  - A/B tests
  - Server side Analytics
- React Concurrent Mode `<Suspense>`
- use React Lazy
- react server components for react v18, `componet.server.js`
  - move computation from client to server
  - What if the API itself is slow? even SSR cannot help there. Its either ALL or nothing
  - stream HTML from edge function progressively using `<Suspense>`
  - enables chaching and revalidating and refreshing the cache
- import from full URLs, like images or npm modules

### Server components

to solve network waterfall problem

<Footer />
