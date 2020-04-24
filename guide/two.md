# two


```sh
docker build --tag avi/vuepress .

docker run --rm -d -p 8080:8080 -v (pwd):/blog avi/vuepress
```