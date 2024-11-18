# Boilerplate Nodejs + Express + Typescript + Prisma

## Stacks

- Nodejs
- Express
- Prisma
- Typescript
- PostgreSQL
- SOLID Principles

## Deployed to GCP w/ CloudSQL DB

Source <https://github.com/gushiguera/prorata-publisher-api>
Sample response <https:/prorata-publisher-api-366300393677.us-central1.run.app/api/v1/publishers>

## Install & Run

```
  yarn install or npm install or pnpm install
  yarn server:dev or npm run server:dev or pnpm run server:dev

```

### Docker + Sample .env

docker file included, `docker compose up` to run locally

```
DATABASE_URL=postgresql://postgres:123456@postgresdb:5432/prorata-publisher

POSTGRESDB_USER=postgres
POSTGRESDB_ROOT_PASSWORD=123456
POSTGRESDB_DATABASE=prorata-publisher
POSTGRESDB_LOCAL_PORT=5432
POSTGRESDB_DOCKER_PORT=5432
NODE_LOCAL_PORT=8080
NODE_DOCKER_PORT=8080

PORT_APP=$NODE_LOCAL_PORT
```
