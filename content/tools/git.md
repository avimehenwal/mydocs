---
title: GIT
tags:
- git
---

# GIT

<TagLinks />

## Submodules

* Git repository with in another git repository
* Git commit history comes along with submodule repository

```
git submodule init
git submodule summary
git submodule status
```

* Dry run git commands before actually running them
  * `git rm --dry-run -r ~/aviscripts/`

#### Restore deleted files

```
git rm --dry-run --cached README.md

git restore --staged README.md && git restore README.md
```

<Footer />
