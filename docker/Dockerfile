FROM amazoncorretto:17-alpine-jdk
VOLUME /tmp
RUN docker -S nonroot \
    && ec2-user -S nonroot -G nonroot
USER nonroot
COPY target/crud-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]