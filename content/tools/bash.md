---
title: Bash
tags:
- bash
- pipes
- linux
- unix
---

# Bash

<TagLinks />

## Pipes man

```bash
curl -s google.com | vim -
git diff | hg import -
```

1. Pipes
2. Loops
3. Subshells

Which letters are NOT used as ls switches.

```bash
function args() { man ls | col -b | grep '^[[:space:]]*ls \[' | awk -F '[][]' '{print $2}'}
python -c "import string; print set(string.lowercase) - set('`args`')"
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/sCZJblyT_XM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Softwares

* https://www.destroyallsoftware.com/screencasts

<Footer />
