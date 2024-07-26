Here is a sample README file for your project. You can customize it as needed:

---

# Portfolio Website

This repository contains the code for a portfolio website built using the MERN stack (MongoDB, Express.js, React, Node.js) and Docker. It includes separate Docker images for the frontend, backend, and MongoDB services.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Using Docker Compose](#using-docker-compose)
- [Accessing the Application](#accessing-the-application)
- [Stopping and Removing Containers](#stopping-and-removing-containers)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Frontend**: React-based user interface.
- **Backend**: Node.js and Express.js API.
- **Database**: MongoDB for data storage.
- **Dockerized**: Separate Docker images for frontend, backend, and MongoDB.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose (optional): [Install Docker Compose](https://docs.docker.com/compose/install/)

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Pull Docker Images**

   Pull the Docker images from Docker Hub:

   ```bash
   docker pull tanmaykumarchaurasia/portfolio-frontend
   docker pull tanmaykumarchaurasia/portfolio-backend
   docker pull tanmaykumarchaurasia/mongo
   ```

## Running the Application

### Without Docker Compose

1. **Run MongoDB**

   ```bash
   docker run -d \
     --name mongo \
     -p 27017:27017 \
     tanmaykumarchaurasia/mongo
   ```

2. **Run Backend**

   ```bash
   docker run -d \
     --name backend \
     --link mongo:mongo \
     -p 5000:5000 \
     tanmaykumarchaurasia/portfolio-backend
   ```

3. **Run Frontend**

   ```bash
   docker run -d \
     --name frontend \
     -p 3000:3000 \
     tanmaykumarchaurasia/portfolio-frontend
   ```

### Using Docker Compose (Recommended)

1. **Create `docker-compose.yml` File**

   Create a `docker-compose.yml` file in the root directory with the following content:

   ```yaml
   version: '3.8'

   services:
     frontend:
       image: tanmaykumarchaurasia/portfolio-frontend
       ports:
         - "3000:3000"
       depends_on:
         - backend

     backend:
       image: tanmaykumarchaurasia/portfolio-backend
       ports:
         - "5000:5000"
       depends_on:
         - mongo

     mongo:
       image: tanmaykumarchaurasia/mongo
       ports:
         - "27017:27017"
       volumes:
         - mongo-data:/data/db

   volumes:
     mongo-data:
   ```

2. **Run Docker Compose**

   Start all services with:

   ```bash
   docker-compose up
   ```

## Accessing the Application

- **Frontend**: Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio website.
- **Backend**: If needed, the backend API is available at [http://localhost:5000](http://localhost:5000).
- **MongoDB**: MongoDB can be accessed on port `27017`. Use MongoDB tools for database management.

## Stopping and Removing Containers

To stop and remove containers:

```bash
docker stop frontend backend mongo
docker rm frontend backend mongo
```

