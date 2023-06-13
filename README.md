# Overview

This is a simple example of a nodeJS application with Swagger documentation.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Documentation

```bash
npm run doc
```

## Tools

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Swagger](https://swagger.io/)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
- [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## What is Swagger?

Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include:

- [Swagger Editor](https://swagger.io/tools/swagger-editor/) – browser-based editor where you can write OpenAPI specs.
- [Swagger UI](https://swagger.io/tools/swagger-ui/) – renders OpenAPI specs as interactive API documentation.
- [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) – generates server stubs and client libraries from an OpenAPI spec.
- [Swagger Inspector](https://swagger.io/tools/swagger-inspector/) – API testing tool (for testing the APIs you build or consume)
- [SwaggerHub](https://swagger.io/tools/swaggerhub/) – API design and documentation platform for teams.

## What is OpenAPI?

The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.

Use cases for machine-readable API definition documents include, but are not limited to: interactive documentation; code generation for documentation, clients, and servers; and automation of test cases. OpenAPI documents describe an API’s operations and parameters, and can be used to validate the completeness of an API implementation.

## Why use Swagger?

- **Design-first**: Design your APIs before you write any code, ensuring they’re flexible and easy to maintain.
- **Team-first**: Speed up collaboration by having your API design in a central location where you can easily share and discuss it.
- **API-first**: Ensure your API meets your stakeholders’ needs by having them review and test the design, and provide feedback, before you write any code.
- **Code-first**: Generate server stubs and client SDKs from your OpenAPI specification, so your API teams can start developing and testing right away.
- **Document-first**: Generate interactive documentation that lets your users try out your API right from the browser, and automatically keeps your docs up to date as your API evolves.
- **Test-first**: Generate automated tests from your OpenAPI specification to test your API and validate its behavior.
- **Monitor-first**: Generate monitoring code from your OpenAPI specification to automatically measure your API’s performance and health.

## What is Swagger UI?

Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation making it easy for back end implementation and client side consumption.

## What is Swagger JSDoc?

Swagger JSDoc is a tool that allows you to integrate Swagger using JSDoc comments in your code. It reads your JSDoc-annotated source code and generates an OpenAPI (Swagger) specification. This specification can be used by the Swagger-UI project to display the API and Swagger-Codegen to generate clients in various languages. Swagger JSDoc implements most of the Swagger 2.0 specification.

## What is Swagger UI Express?

This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route. You can see an example implementation in the /example folder.

# References

- [Swagger](https://swagger.io/)
- [Section.io](https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/)

# Author

- [proXDhiya](https://www.github.com/proXDhiya)
