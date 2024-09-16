# Node.js API with Express and MongoDB

This is a simple Node.js API built using Express and MongoDB (Mongoose). It is designed to handle basic routes and MongoDB operations, including creating, reading, updating, and deleting data.

## Features

- RESTful API using Express.js
- MongoDB for data storage (via Mongoose)
- Environment variables for configuration (`dotenv`)
- Sample routes with data operations

## Requirements

- Node.js (>= 12.x)
- MongoDB (local or cloud e.g., MongoDB Atlas)
- npm (Node Package Manager)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ojsholly/blog-post-crud.git && cd blog-post-crud

```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```


### 4. Set up MongoDB
Ensure you have a MongoDB instance running. If you're using MongoDB Atlas, create a cluster and whitelist your IP. Then, update the **DB_CONNECTION** variable in the .env file with your connection string.

Example:


```bash
DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
### 5. Run the API

```bash
npm start
```
The API will be running on http://localhost:3000.

## 6. Test the API

Use an API client like Postman or Insomnia to test the endpoints.

### Available Routes

* **GET /:** Home route
* **GET /posts:** Retrieve all posts
* **POST /posts:** Create a new post
* **GET /posts/:id:** Get a specific post by ID
* **PUT /posts/:id:** Update a post by ID
* **DELETE /posts/:id:** Delete a post by ID

### Project Structure

├── .env.example         # Environment variables example

├── routes

│   └── posts.js         # Post-related routes

├── app.js               # Main application entry point

├── package.json         # Project configuration and dependencies

└── README.md            # Project documentation

### Environment Variables

This project utilizes environment variables defined in a `.env` file (separate from `.env.example`). These variables are essential for configuration:

* **DB_CONNECTION:** The MongoDB connection string (specifies how to connect to your database)
* **PORT:** The port number on which the server will listen for incoming requests (default: 3000)

**Important:** Create a `.env` file and populate it with actual values for these variables before running the application. Never commit the `.env` file to version control to avoid exposing sensitive credentials.

### License

This project is licensed under the MIT License, a permissive open-source license. The full license details can be found in the `LICENSE` file.

