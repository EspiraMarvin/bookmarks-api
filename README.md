<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

### Setup Local

## Installation

```bash
$ npm install
```

## Running the app

```bash
# install deps
$ yarn

# start api in dev mode
$ npm run start:dev

# restart postgres in docker and push migrations
$ yarn db:dev:restart

# production mode
$ npm run start:prod
```

## Test (done with Pactum & Jest)

```bash
# e2e tests (this runs test db and run migrations and all the tests)
$ yarn test:e2e

# Run prisma studio in test

$ npx dotenv -e .env.test -- prisma studio

# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Others

start the postgres image With Docker 
```bash
docker-compose up --build --force-recreate -detach
```


Start postgres in docker and run prisma migrations

```bash
yarn db:dev:restart
```

Prisma studio
```bash
npx prisma studio
`````

Start Test db image and run prisma migrations

```bash
yarn db:test:restart
```
create controller WITH tests

```bash
nest g controller auth 
```

create controller WITHOUT tests
```bash
nest g controller auth --no-spec
```
