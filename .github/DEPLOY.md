# Getting Started Deploy :rocket:
After you have cloned the project and installed the dependencies, it is nescessary to run the container with the database and prisma, using the command:
```shell
$ cd database/
$ docker-compose up -d
```

Then just use the command to generate the files needed to deploy, using the command:
```shell
$ cd ../ # returning to the root directory of the project
$ npm run deploy
```

Then just use the command to start the server:
```shell
$ npm start 
$ npm run dev # OR using nodemon
```