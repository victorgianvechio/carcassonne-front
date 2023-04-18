FROM node:18.12.1
WORKDIR /app/carcassonne-front
COPY package.json ./
RUN yarn
COPY . .
EXPOSE 6000
CMD yarn prod
