# Portfolio MERN Stack Application

## Overview

This repository contains a Dockerized MERN (MongoDB, Express, React, Node.js) stack application. It consists of three main components:
- **Frontend**: React-based user interface.
- **Backend**: Express-based API server.
- **MongoDB**: Database server.

## Docker Setup

To run this application using Docker, follow these steps:

### Prerequisites

- Docker installed on your machine.
- Docker Compose installed (optional but recommended for managing multi-container setups).

### Running Containers

1. **Run MongoDB Container**:

    ```bash
    docker run -d \
      --name mongo \
      -p 27017:27017 \
      tanmaykumarchaurasia/mongo
    ```

2. **Run Backend Container**:

    ```bash
    docker run -d \
      --name backend \
      -p 8000:8000 \
      tanmaykumarchaurasia/portfolio-backend
    ```

3. **Run Frontend Container**:

    ```bash
    docker run -d \
      --name frontend \
      -p 3000:3000 \
      tanmaykumarchaurasia/portfolio-frontend
    ```

### Accessing the Application

- **Frontend**: Open your web browser and navigate to `http://localhost:3000`.
- **Backend API**: Access the backend at `http://localhost:8000`.

### Using Docker Compose (Optional)

To simplify the process, you can use Docker Compose to manage all the containers:

1. Create a `docker-compose.yml` file:

    ```yaml
    version: '3'

    services:
      mongo:
        image: tanmaykumarchaurasia/mongo
        ports:
          - "27017:27017"

      backend:
        image: tanmaykumarchaurasia/portfolio-backend
        ports:
          - "8000:8000"
        depends_on:
          - mongo

      frontend:
        image: tanmaykumarchaurasia/portfolio-frontend
        ports:
          - "3000:3000"
        depends_on:
          - backend
    ```

2. Run Docker Compose:

    ```bash
    docker-compose up -d
    ```

### Stopping Containers

To stop the running containers, use:

```bash
docker stop mongo backend frontend
