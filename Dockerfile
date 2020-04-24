FROM node:10

LABEL maintainer=avimehenwal
ENV LANG "en_US.UTF-8"

WORKDIR /blog
# COPY . .
COPY package.json .
RUN pwd
RUN ls -la
# RUN yarn global add vuepress
# RUN npm i vuepress-plugin-auto-sidebar
RUN yarn install
RUN yarn list | grep theme-cool

VOLUME [ "/blog", ]
EXPOSE 8080
CMD [ "vuepress", "dev" ]