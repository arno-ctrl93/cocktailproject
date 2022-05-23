# cocktailproject

This is the tutorial how i build my application web, firstly i will explain how i build the server and connect to the api (thecocktaildb)
It's not very useful if you know yarn / nestJS but it's a memo for my future me. :)

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

5. To catch the different element of the db in your code we use the PrismaClient

const client = new PrismaClient();
const cocktails = await client.cocktails.findMany();
return cocktails;

This code can be find inside a get response


# Now we add a new service to interact with injection
(I need to search more information about this concept)
https://docs.nestjs.com/providers

yarn nest g service prisma

Starting and prevent shutdown:
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHook(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await this.$disconnect();
            app.close();
        });
    }
}

Also add the last method to the main.ts
const prismaService: PrismaService = app.get(PrismaService);
prismaService.enableShutdownHook(app);

Now we can add the service to our cocktails' controller with 
constructor(private prisma: PrismaService) {}
And directly call him during the request of the DB:
const cocktails = await this.prisma.cocktail.findMany()
