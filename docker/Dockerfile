FROM amazoncorretto:17-alpine-jdk
VOLUME /tmp
COPY target/crud-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]