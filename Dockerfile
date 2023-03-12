FROM node:18 AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --prod --no-optional
COPY . .
RUN pnpm build:prod

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist .
CMD ["node", "app.js"]
