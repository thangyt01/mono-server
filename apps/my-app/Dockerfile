###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20.13.1-alpine3.19 As development

RUN apk update && apk upgrade && \
    apk add --no-cache make g++ gcc bash py-pip curl

WORKDIR /app

# Install app dependencies
COPY --chown=node:node .npmrc package.json package-lock.json /app/

RUN npm ci

# Copy source
COPY --chown=node:node . /app

RUN npx nx run-many -t generate-types --parallel 1

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20.13.1-alpine3.19 As build

WORKDIR /app

COPY --chown=node:node .npmrc package.json package-lock.json /app/

COPY --chown=node:node --from=development /app/node_modules /app/node_modules

COPY --chown=node:node . /app

RUN npx nx build my-app

RUN npm ci --only=production && npm cache clean --force

# Copy prisma generated files
COPY --chown=node:node --from=development /app/node_modules/@my-prisma /app/node_modules/@my-prisma

USER node

###################
# PRODUCTION
###################

FROM node:20.13.1-alpine3.19 As production

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules /app/node_modules

COPY --chown=node:node --from=build /app/dist /app/dist

CMD [ "node", "dist/apps/my-app/main.js"]
