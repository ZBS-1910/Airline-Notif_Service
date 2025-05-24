FROM node:18-alpine

WORKDIR /usr/src/notification-service

# Create volume for node_modules
VOLUME /usr/src/notification-service/node_modules

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev"]
