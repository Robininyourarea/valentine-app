# Use official Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Install and use serve to run production build
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to start the React app
CMD ["serve", "-s", "build", "-l", "3000"]