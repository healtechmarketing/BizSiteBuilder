# Use Node 20 with Debian slim
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy only necessary files first for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the full app
COPY . .

# Build the TypeScript code
RUN npm run build

# Set environment variable
ENV PORT=8080

# Expose Cloud Run port
EXPOSE 8080

# Start the server (entry point must match built file path)
CMD ["node", "dist/index.js"]
