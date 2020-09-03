---
title: GIT
tags:
- git
---

# GIT

<TagLinks />

* Git is just a big directed acyclic graph DAG

## Submodules

* Git repository with in another git repository
* Git commit history comes along with submodule repository

```bash
git submodule init
git submodule summary
git submodule status
```

```bash
$ git submodule add --name subOne -- git@github.com:avimehenwal/javascript.git docs/docs/posts
Cloning into '/home/avi/EXP/multiple-docs/docs/docs/posts'...
X11 forwarding request failed on channel 0
remote: Enumerating objects: 652, done.
remote: Counting objects: 100% (652/652), done.
remote: Compressing objects: 100% (365/365), done.
remote: Total 652 (delta 273), reused 617 (delta 241), pack-reused 0
Receiving objects: 100% (652/652), 6.33 MiB | 6.85 MiB/s, done.
Resolving deltas: 100% (273/273), done.
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
## Merging 2 repos into 1

> subtree-merge or submodules

* didn’t need the ability to extract changes and ship them back anywhere because my old repositories would be retired
* fatal: refusing to merge unrelated histories
  * git pull --allow-unrelated-histories

```
# In new git repo
git remote add one <url>
git pull --allow-unrelated-histories one master
find ! -path "./.git*" -exec mv -v --target-directory=one_repo {} +
mv -v .gitignore one_repo/
```

How do I merge A into B, without losing history on any side?

```bash
git subtree add --prefix=rails git://github.com/rails/rails.git master
```

This will appear as a single commit where all files of Rails master branch are added into "rails" directory. However the commit's title contains a reference to the old history tree:

### Git merge

Used when you have ammended/rebases commits on one branch which were already there in master.
Performing merge normally will raise **merge conflicts**. To automatically force rewrite changes (rebased or ammended) from develop to master use this command below

```
git merge --progress --verbose --summary -X theirs develop
```

## :cherry_blossom: Cherrypicking

Useful when working on opensourced projects, you might want to keep personal changes in develop branch,
but only cherry-pick certain commits to master branch for raising PR with upstream.

```bash
git cherry-pick <commitId> -n
```

### Reset

* To rewind local changes
* Time travelling
* 3 trees in git
  *

<iframe width="560" height="315" src="https://www.youtube.com/embed/LX11jimGDGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Resources

* https://github.com/web-platform-tests/wpt
* [Design backend APIs](https://stoplight.io/studio/)

<Footer />
