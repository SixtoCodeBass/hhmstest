FROM adoptopenjdk/openjdk11:jre-11.0.9.1_1-alpine as build
WORKDIR /hhms

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml file
COPY pom.xml .
EXPOSE 9090
COPY target/hhmsback-0.0.1-SNAPSHOT.jar /app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
