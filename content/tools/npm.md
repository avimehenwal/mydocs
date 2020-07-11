---
title: Node Package Manager
tags:
- npm
- node
- package
- manager
---

# Node Package Manager

<TagLinks />

> Biggest repository of open sourced code with over 350,000 packages


* date-fns - https://date-fns.org/
* dotenv - https://www.npmjs.com/package/dotenv
* socket.io - https://socket.io/
* uuid - https://www.npmjs.com/package/uuid
* axios - https://github.com/axios/axios
* classnames - https://jedwatson.github.io/classnames/

## Automate Releases

### Release Tasks

1. Work of features/tasks, make conventional commits
   1. Maybe get some test, lint, code-coverage, performance reports etc
2. generate `CHANGELOG`
3. Release Notes
4. Tag master branch
5. bump version in `package.json`
6. publish artifacts to `npm`

### Tools which can help in above steps

commitng

* git flow
* husky | commit-lint
* commitzen | [@commitlint/prompt](https://commitlint.js.org/#/)

Versioning

* standard-version
* semantic release

![Software Versioning](https://miro.medium.com/max/770/1*LLDEWaQ0BW0UITTVxjPv3A.png)

<Footer />
