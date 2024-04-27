FROM openjdk:17-oracle
COPY target/crud-0.0.1-SNAPSHOT.jar crud-0.0.1-SNAPSHOT.jar
ENV SERVICE_NAME="my-service"

RUN addgroup --gid 1001 -S $SERVICE_NAME && \
    adduser -G $SERVICE_NAME --shell /bin/false --disabled-password -H --uid 1001 $SERVICE_NAME && \
    mkdir -p /var/log/$SERVICE_NAME && \
    chown $SERVICE_NAME:$SERVICE_NAME /var/log/$SERVICE_NAME

EXPOSE 8080
USER $SERVICE_NAME
ENTRYPOINT ["java", "-jar", "/crud-0.0.1-SNAPSHOT.jar"]