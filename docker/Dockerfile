FROM alpine
ENV DOCKERVERSION=26.0.0
RUN curl -fsSLO https://download.docker.com/linux/static/stable/x86_64/docker-${DOCKERVERSION}.tgz \
  && tar xzvf docker-${DOCKERVERSION}.tgz --strip 1 \
                 -C /usr/local/bin docker/docker \
  && rm docker-${DOCKERVERSION}.tgz
COPY target/crud-0.0.1.jar crud-0.0.1.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/crud-0.0.1.jar"]
