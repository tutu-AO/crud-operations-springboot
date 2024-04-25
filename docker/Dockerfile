FROM amazoncorretto:17-alpine-jdk
EXPOSE 8070
VOLUME /tmp
RUN adduser -D aosei
USER aosei
COPY target/crud-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT exec java -jar app.jar