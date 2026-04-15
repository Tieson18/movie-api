# 🎬 Movie Catalog API

## 📌 Project Overview

This project is a RESTful Movie Catalog API built using Node.js,
Express, TypeScript, and OpenAPI (Swagger). It follows a contract-first
development approach, where the API specification is defined before
implementation.

------------------------------------------------------------------------

## 🚀 Live API Documentation

👉 https://movie-catalog-api-fwehcpdmh6bggtak.eastus2-01.azurewebsites.net/docs

------------------------------------------------------------------------

## 💻 GitHub Repository

👉 https://github.com/Tieson18/movie-api

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   Node.js
-   Express.js
-   TypeScript
-   OpenAPI 3.0 (Swagger)
-   Swagger UI
-   OpenAPI Backend

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Clone Repository

git clone https://github.com/Tieson18/movie-api.git cd
movie-api

### 2. Install Dependencies

npm install

### 3. Run in Development

npm run dev

### 4. Build for Production

npm run build

### 5. Start Production Server

npm start

------------------------------------------------------------------------

## 📡 API Endpoints

  Method   Endpoint        Description
  -------- --------------- ----------------------
  GET      /        Get all movies
  POST     /        Create a new movie
  GET      /{id}    Get a movie by ID
  PUT      /{id}    Update a movie
  DELETE   /{id}    Delete a movie
  GET      /stats   Get movie statistics

------------------------------------------------------------------------

## 📄 Documentation Endpoints

  Route           Purpose
  --------------- ------------------------
  /docs           Swagger UI
  /openapi.yaml   Raw YAML specification
  /openapi.json   JSON specification

------------------------------------------------------------------------

## 🧠 Reflection

For this project, I chose the movie catalog domain because it is simple,
intuitive, and widely understood. It allowed me to focus more on API
design and implementation rather than complex business logic. Movies
naturally map to structured data such as title, director, genre, and
rating, making them ideal for practicing RESTful API development.

I used Node.js with Express and TypeScript because they are widely used
in modern backend development and provide strong typing and scalability.
The addition of OpenAPI allowed me to define the API contract clearly
before writing any code.

One of the most important concepts I learned was contract-first
development. Instead of starting with implementation, I began by
designing the API specification using OpenAPI. This helped me clearly
define endpoints, request and response structures, and validation rules.
It also made it easier to test endpoints using Swagger UI.

I faced several challenges during the project. YAML formatting errors,
such as incorrect indentation or duplicate keys, caused parsing issues.
I also encountered problems with TypeScript module resolution,
especially when dealing with .ts vs .js imports in production.
Deployment introduced additional challenges, including environment
configuration and file path handling.

Compared to writing code first, the spec-driven approach is more
structured and reliable. Although it requires more planning upfront, it
reduces errors later and ensures consistency between the API design and
implementation. Overall, contract-first development improves
maintainability, documentation quality, and collaboration, making it a
valuable approach for real-world projects.

------------------------------------------------------------------------

## ✅ Submission Checklist

-   [x] GitHub repository with full code
-   [x] OpenAPI YAML file included
-   [x] Working deployed API
-   [x] Swagger UI accessible at /docs
-   [x] Reflection included
