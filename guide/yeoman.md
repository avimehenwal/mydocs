# Yeoman

> THE WEB'S SCAFFOLDING TOOL FOR MODERN WEBAPPS

* Automating build of frontend projects usign Generators


## How to create a new generator

```
npm install -g generator-generator

yo generator
npm link
yo

```

link newly installed generator as npm module
check it new scaffold is available in new list

generator
app
index.js files is extended in our new generator

prompting()
use inputs, greetings
Ask questions to generate variables
variables are available throughput the the rest of template

yoman templating syntax
<%= variableName %>

test it before publishing

place scaffolding files to be copied in template directory
copy in CWD

run tests
npm test


[scaffolding]: https://en.wikipedia.org/wiki/Scaffold_(programming)