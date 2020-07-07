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

###### How to edit any commit message? or as a matter of fact rewrite entire git history

strategy is checkout to commit -> amend message -> then rebase back to HEAD

```
# abort on conflicts
git rebase ... || git rebase --abort

git rebase --interactive <commit hash you want to change>^
# then reword commit message

# First commit
git rebase --interactive --root

# Rebase last N commits
git rebase --interactive @~9

# checkout the root commit
git checkout <sha1-of-root>

# amend the commit
git commit --amend

# rebase all the other commits in master onto the amended root
git rebase --onto HEAD HEAD master
```

## Resources

* https://github.com/web-platform-tests/wpt
* [Design backend APIs](https://stoplight.io/studio/)

<Footer />
