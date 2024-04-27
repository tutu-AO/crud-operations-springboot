FROM openjdk:17-oracle
EXPOSE 8080
RUN adduser -D aosei
USER aosei
COPY target/crud-0.0.1-SNAPSHOT.jar crud-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/crud-0.0.1-SNAPSHOT.jar"]