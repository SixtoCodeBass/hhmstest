FROM node:16.17.0
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev","--","--host","0.0.0.0"]

# production environment
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]