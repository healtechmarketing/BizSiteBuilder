# ---- Build Stage ----
FROM node:18 AS builder

WORKDIR /app

# Copy all relevant files
COPY package*.json tsconfig.json vite.config.ts ./
COPY client ./client
COPY server ./server
COPY shared ./shared
COPY tailwind.config.ts postcss.config.js drizzle.config.ts ./

# Install dependencies
RUN npm install

# Build frontend + backend
RUN npm run build

# ---- Production Stage ----
FROM node:18-slim

WORKDIR /app

# Only copy what's needed for production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Tell GCP which port to expose (Express should listen on 8080)
EXPOSE 8080

# Start the app
CMD ["node", "dist/index.js"]
