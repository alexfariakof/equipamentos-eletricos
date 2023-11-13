FROM node:lts-alpine as build
ENV NODE_ENV=production
WORKDIR /app

COPY ["./__client__/package.json", "./__client__/package-lock.json*", "./"]
RUN npm install -P react react-dom @types/react-dom
RUN npm install react-scripts 
RUN npm install && mv node_modules ../
COPY ./__client__ .
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./__client__/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]