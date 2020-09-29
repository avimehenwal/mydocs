---
title: Docker Container
tags:
- docker
- container
---

# Docker Container

<TagLinks />


###### [Advantage of using docker-compose file version 3 over a shellscript?](https://stackoverflow.com/questions/45175126/advantage-of-using-docker-compose-file-version-3-over-a-shellscript)


<Procons>
  <template v-slot:pro>
    <h3>docker compose</h3>
    <ol>
      <li>Multiple inherited YAML files</li>
      <li>Automatically handles clearnup</li>
      <li>Redability, write less code</li>
    </ol>
  </template>

  <template v-slot:con>
    <h3>Shell script</h3>
    <ol>
      <li>Able to use shell magic</li>
    </ol>

  </template>
</Procons>

## Dockerfile References

```docker
FROM

ARG user1=someuser
LABEL version="1.0"
ENV myName John Doe

ADD --chown=55:mygroup files* /somedir/
COPY hom?.txt /mydir/

<!-- The VOLUME instruction creates a mount point with the specified name and marks it as
     holding externally mounted volumes from native host or other containers. -->
VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
EXPOSE 80/tcp 443
USER ${user:-some_user}:group


STOPSIGNAL
WORKDIR /path/to/workdir

<!-- when the image is used as the base for another build. -->
ONBUILD RUN /usr/local/bin/python-build --dir /app/src

SHELL ["executable", "parameters"]
RUN uname -a

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

ENTRYPOINT ["top", "-b"]
CMD ["-c"]
```

What is the difference between `RUN` and `SHELL` directive?
:   

### References



<Footer />
