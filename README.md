# cocktailproject

npx @nestjs/cli new CocktailWeb-server
# Choose yarn

yarn start:dev

#Check if localhost:3000 work

# add a controller (need to catct html request and send response)
yarn nest g controller cocktails

# Setup a database and an admin pannel to manage the db with docker (look the docker-compose.yml)
need to have docker and launch: docker-compose up
# Now create in the admin page the db cocktail_db

# We will use the librairy prisma to manage our database
yarn add prisma
yarn prisma init

1. Set the DATABASE_URL in the .env file to point to your existing database
DATABASE_URL="postgresql://postgres:password@localhost:5432/cocktail_db?schema=public" > .env

2. Add the model of your data in schema.prisma like
model Cocktail {
    id          Int @id@default(autoincrement())
    name        String
    description String
}

3. Migrate the data inside the db
yarn prisma migrate dev --name cocktails --create-only
yarn prisma migrate dev

4. Now we can see the db in your admin pannel



