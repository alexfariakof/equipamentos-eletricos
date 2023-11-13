FROM node:lts-alpine as node
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["./__server__/package.json", "./__server__/package-lock.json*", "./"]
RUN npm install 
COPY ./__server__/ .
RUN npx prisma generate --schema schema.prisma
COPY ./__server__/.env.docker ./.env
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
