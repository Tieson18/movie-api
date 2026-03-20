# Movie Catalog API - Reflection

## Reflection

For this project, I chose the movie catalog domain because it is simple,
intuitive, and widely understood. It allowed me to focus more on API
design and implementation rather than complex business logic. Movies
naturally map to structured data (title, director, genre, rating), which
made them ideal for practicing RESTful API design and modeling.

For the technology stack, I used Node.js with Express and TypeScript,
along with an OpenAPI specification. This combination provided strong
typing, scalability, and alignment with modern backend development
practices.

One of the most important things I learned from this project was the
concept of contract-first development. Instead of writing code first, I
started by defining the API contract using the OpenAPI specification.
This forced me to think carefully about endpoints, request/response
structures, and validation rules before implementing any logic.

A major challenge I faced was ensuring that the OpenAPI specification,
TypeScript code, and runtime behavior all stayed consistent. Small
mistakes in the YAML file, such as indentation errors or duplicate keys,
caused parsing failures. I also encountered issues with module
resolution when working with ES modules and TypeScript.

Comparing the spec-driven approach to writing code first, I found that
contract-first development provides a more structured workflow. While it
may feel slower at the beginning, it ultimately saves time by preventing
design inconsistencies and reducing debugging later.

Overall, the spec-driven approach improves collaboration,
maintainability, and documentation quality, making it valuable for
larger or team-based projects. 
