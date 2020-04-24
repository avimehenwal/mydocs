# Sitegenerator home

* where to place assets files, dot files
  * https://code.visualstudio.com/docs/editor/variables-reference\
* https://github.com/z3by/vuepress-theme-modern-blog
* https://github.com/FriendlyUser/vuepress-theme-cool-starter
* https://github.com/wowthemesnet/mediumish-vuepress-blog-theme
* [vuepress themes](https://jamstackthemes.dev/ssg/vuepress/)

```
docker run --name blog --rm -d -p 8080:8080 -v (pwd):/blog avi/vuepress

docker stop blog; && docker container ls

docker stop blog; docker container ls; docker run --name blog --rm -d -p 8080:8080 -v (pwd):/blog avi/vuepress
```

<pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>

# Catalog Graph

<CatalogGraph />