# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy necessary files for the application
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install --quiet

# Copy the rest of the application files
COPY . /app/

RUN ls -la /app/

# Build the application (if needed)
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Command to start the application when the container starts
CMD ["npm", "start"]



