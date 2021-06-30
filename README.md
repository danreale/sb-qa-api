# Semanticbits Interview API

## Installation

Prerequisite - nodejs must be installed (LTS) https://nodejs.org/en/download/

Open terminal and run:

`npm install`

### Running the API

`npm run start`

### Running Tests

`npm run test`

### Examples

Healthcheck

GET `localhost:3000/api/health`

To get all of the employees

GET `/api/employees`

Query Parameters available to use: `lastName`, `job`

Get employee by id

GET `api/employees/{id}`

# Questions to answer

(Using Postman)

- What is the message you get from the health check endpoint?
- How many employees do we have at semanticbits?
- What is Peter Griffin's job?
- How many people work in QA?
- Please provide the first name and job for employee 8?
