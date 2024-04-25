FROM amazoncorretto:17-alpine-jdk
EXPOSE 8070
ENV APP_HOME /usr/src/app
RUN adduser -D aosei
USER aosei
COPY ./target/crud-0.0.1-SNAPSHOT.jar app.jar
WORKDIR $APP_HOME
ENTRYPOINT exec java -jar app.jar