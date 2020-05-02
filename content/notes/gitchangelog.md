---
title: Changelog
tags:
- git
- changelog
---

# Changelog

<TagLinks />

You want to know what happened to your project after 2 years?

* ups and downs on a project, learning
  * features
  * bugs
  * performance / security enhancements

### How visual studo project generates Release notes?

1. Dump data from git logs - everyones contributions
   1. Project Planning tool has a flag, like required release notes yes/no
   2. How we are going to talk to customers about this, Press release style
      1. Its a different mindset, try to follow it religiously
2. Let a curator parse to generate a blog post like feel
3. QA and Authoring, Editing in the end

## How to generate them automatically?

The Conventional Commits specification is a lightweight convention on top of commit messages.
It provides an easy set of rules for creating an explicit commit history, which makes it easier to write automated tools on top of.

https://github.com/conventional-changelog/standard-version

fix, feat, build:, chore:, ci:, docs:, style:, refactor:, perf:, test
! BREAKING CHANGE
(scope)

Commit no Nuisance

```
<type>[optional scope]: <description>

[optional body]

[optional footer]

Reg Ex pattern

/^(revert: )?(feat|fix|docs|style|refactor|perf|test|chore)(\(.+\))?: .{1,50}/
```

### HOw to implement?

Using git pre-commit hooks

Using external tools like commitit

Using vscode Extension VSCode Conventional Commits

https://github.com/vivaxy/gacp
https://github.com/KnisterPeter/vscode-commitizen

::: warning Questions
1. Why are changelog important?
2. What problem do they solve?
3. What the content should look like?
   1. For humans to understand
   2. For machine, to autogenerate and parse
:::



<SimpleNewsletter/>
<Disqus />

[conventionalcommits]: https://www.conventionalcommits.org/en/v1.0.0-beta.4/