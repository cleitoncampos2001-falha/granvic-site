# Build estático do site (Astro) + serve via nginx.
# Usado pelo EasyPanel: ele lê este Dockerfile, builda a imagem e roda o
# container — sem precisar de SSH, nginx manual nem certbot manual no VPS.

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
