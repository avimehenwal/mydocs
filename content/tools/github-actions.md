---
title: Github Actions
tags:
- github
- actions
- ci
- cd
---

# Github Actions

<TagLinks />

## Triggers

* push, pull request, branching strategies


## Use cases

Docker Build Pipeline

* Build new docker images
* Push new built images to docker registry
  * would need github secrets
  * using environment variables in `github -> settings` section
* Mount secrets in github actions file?

```yaml
env:
  DOCKER_USER: ${{ secrets.DOCKER_USER}}
  DOCKER_PASS: ${{ secrets.DOCKER_PASS}}
run: |
  docker login -u $DOCKER_USER -p $DOCKER_PASS
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/09lZdSpeHAk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<Footer />
