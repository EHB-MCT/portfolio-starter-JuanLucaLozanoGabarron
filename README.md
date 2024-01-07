# SNEACAT - Juan-Luca Lozano

## Description

Welcome to SNEACAT, your online sneaker catalogue. 
Keep a list of all the shoes you have in your dressing room. You can not only admire the pairs but also add your latest purchases or delete those you no longer wear. No more searching for what shoes to wear with SNEACAT.

## Installation

```bash
docker-compose up -- build
```

## API documentation

1. Add new shoes to your list.

```bash
POST /shoes
```

2. Receive a complete list of all your shoes in the database.

```bash
GET /shoes
```

3. Receive detailed information about a shoe by specifying the model. 

```bash
GET /shoes/:model
```

4. Change the name of the shoe by specifying the model

```bash
PUT /shoes/:model
```

5. Delete a shoe by specifying the model. 

```bash
DELETE /shoes/:model
```

## Environment Variables

`POSTGRES_DB`: Defines the database with which applications and services will interact.

`POSTGRES_HOST_AUTH_METHOD`: Determines the authentication method employed for PostgreSQL host connections.

`POSTGRES_USER`: Defines the user account that applications and services use when establishing a connection to the PostgreSQL server.

`POSTGRES_PASSWORD`: Defines the authentication password for connecting to a PostgreSQL database server.

`NODE_ENV`: Specifies the mode of the Node.js environment, indicating the operating environment, such as development or production. the database that applications and services will engage with.

## Sources

- Courses DEV 5 (Jan Everaerts)
- https://react-bootstrap.netlify.app/docs/components/modal/
- https://sweetalert2.github.io/#download 
- https://chat.openai.com/share/95753cdc-7781-445d-ac3a-64b5eb735518

## License

This project is licensed under the [MIT License](License.md)

## Author

Juan-Luca Lozano