---
title: Templating
tags:
- template
- cookiecutter
---

# Templating

<TagLinks />

## Cookiecutter

> Automatic code generation

* Either use the interactive option of python API directly from code with no inputs, required inputs could be provided as  below
* can use filters and operator chaining
* Uses jinja templating
* Inheeritance `include`
  * Multiple liceses to choose from
* Advantages as compared to other code generation tools
  * yeoman
* [Cookie cutter templates on github](https://github.com/topics/cookiecutter)

```
pip3 install --user --verbose cookiecutter

cookiecutter -v --no-input gh:msabramo/cookiecutter-supervisor program_name=foobar startsecs=10

{{cookiecutter.plugin_name}}
{%- now "utc", "%Y" %}
{# jinja comment #}
```

### How to create your own cookiecutter template?

* `cookiecutter.json`
* `{{ template }}`
* All variables used in template contect need to be in cookiecutter.json
* Over 1000 already built templates
  * pytest template
  * pypi project template
  * python to IOS template

```
mkdir {{cookiecutter.project_slug}}
cd {{cookiecutter.project_slug}}

touch {{cookiecutter.script_name}}.py
```

### Steps

1. First create the project
2. Then replace evverything with template variables
3. [How to test templates on CI?](https://github.com/hackebrot/pytest-cookies)

> BSD project clone cannot be MIT. you can clone and modify MIT

### Considerations

1. [editorconfig file](https://editorconfig.org/)
2.


<Footer />
