FROM node:19.3.0-alpine3.16

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./

# EXPOSE [Port you mentioned in the vite.config file]

#EXPOSE 3000
RUN npm run build

#CMD ["npm", "run", "dev"]

 
