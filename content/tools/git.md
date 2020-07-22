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

### Git merge

Used when you have ammended/rebases commits on one branch which were already there in master.
Performing merge normally will raise **merge conflicts**. To automatically force rewrite changes (rebased or ammended) from develop to master use this command below

```
git merge --progress --verbose --summary -X theirs develop
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
