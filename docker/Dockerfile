FROM openjdk:17-oracle
EXPOSE 8080
RUN addgroup -S nonroot && adduser -S nonroot -G nonroot
USER nonroot
COPY target/crud-0.0.1-SNAPSHOT.jar crud-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/crud-0.0.1-SNAPSHOT.jar"]