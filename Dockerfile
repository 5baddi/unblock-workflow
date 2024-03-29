# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat autoconf automake mesa-dev mesa libxi build-base gcc libtool nasm
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Install dependencies only when needed
FROM node:16-alpine AS deps-client
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat autoconf automake mesa-dev mesa libxi build-base gcc libtool nasm
WORKDIR /app
COPY client/package.json client/yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps-client /app/node_modules ./client/node_modules
RUN yarn run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder --chown=nodejs:nodejs /app/. ./

#USER nodejs

EXPOSE $SERVER_PORT

ENV PORT $SERVER_PORT

CMD ["yarn", "run", "start"]
