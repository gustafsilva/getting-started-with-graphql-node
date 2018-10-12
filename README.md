# Getting Started with GraphQL Node :book:
Project for studies based on [howtographql](https://www.howtographql.com/graphql-js/1-getting-started/) tutorial node.

## Getting Started :rocket:
First we'll clone the project:
```shell
$ git clone https://github.com/gustafsilva/getting-started-with-graphql-node.git
```

Open the project and install node dependencies:
```shell
$ cd getting-started-with-graphql-node/
$ npm install
```

Start the database container and Prisma:
```shell
$ cd database/
$ docker-compose up -d
```

Go back to the project's root folder and run the server deploy:
```shell
$ cd ../
$ npm run dev
```

## Dependencies
* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Docker](https://www.docker.com/get-started)
* [docker-compose](https://docs.docker.com/compose/)

## Licence
The contents of this repository are covered under the [MIT License](https://github.com/gustafsilva/getting-started-with-graphql-node/blob/master/LICENSE).