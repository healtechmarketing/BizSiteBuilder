# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Build your frontend and backend
RUN npm run build

# Expose port for GCP Cloud Run
EXPOSE 8080

# Run backend entry point
CMD ["node", "dist/index.js"]
