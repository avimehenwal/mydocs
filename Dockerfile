FROM node:10

LABEL maintainer=avimehenwal

# yarn and npm are already installed
ENV LANG "en_US.UTF-8"

# Bundle app source
# COPY . .
COPY . /blog
WORKDIR /blog
# RUN yarn global add vuepress
# RUN npm i vuepress-plugin-auto-sidebar
RUN yarn install

VOLUME [ "/blog", ]
EXPOSE 8080
CMD [ "vuepress", "dev" ]