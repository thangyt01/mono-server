FROM node:20.13.1-alpine3.19

RUN apk update && apk upgrade && \
    apk add --no-cache make g++ gcc bash py-pip curl

WORKDIR /app

# Install app dependencies
COPY .npmrc package.json package-lock.json /app/

RUN npm ci

# Copy source
COPY . /app

RUN npx nx run-many -t generate-types --parallel 1 && npx nx build my-app

CMD [ "node", "dist/apps/my-app/main.js" ]
