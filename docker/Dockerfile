FROM openjdk:17-oracle
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
COPY target/crud-0.0.1-SNAPSHOT.jar crud-0.0.1-SNAPSHOT.jar
EXPOSE 80
ENTRYPOINT ["java", "-jar", "/crud-0.0.1-SNAPSHOT.jar"]