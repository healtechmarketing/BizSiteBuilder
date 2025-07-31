# ---- Build Stage ----
FROM node:18 AS builder

WORKDIR /app

COPY package*.json tsconfig.json vite.config.ts ./
COPY client ./client
COPY server ./server
COPY shared ./shared
COPY tailwind.config.ts postcss.config.js drizzle.config.ts ./

RUN npm install
RUN npm run build

# ---- Production Stage ----
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 8080
CMD ["node", "dist/index.js"]
