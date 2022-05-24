# cocktailproject


# Question sur l'arrivée de 5 nouveaux développeurs dans l'environment de dev:
- Réfléchir à une Coding Style, à des conventions pour faciliter la parcours du code et sa lisibilité. En effet, avoir une convention d'écriture permet de gagner beaucoup de temps lors de l'arrivé sur le projet ou pour comprendre des bouts de code plus ancien ou d'une autre personne.
- Mettre en place un git avec un système de test auto avant le merge de branch afin d'éviter qu'une personne déploie une version totalement beugé en ayant rajouté des features.
- Après la mise en place de la DB, réussir à que chacun est son image (Docker) perso pour pouvoir tester en local plutôt que sur la db officiel, même idée que la proposition d'avant et éviter de casser l'application lors de sa phase de production par une mauvaise manip.
- Assurer un espace de paroles sur un forum pour que les futurs features puissent venir aussi de l'équipe de dev. Cela me semble important, car c'est eux/nous qui sommes plongés dans ce code et il me semble important de laisser la parole aux développeurs qui ont une vision réaliste de ce qui est faisable ou pas.

Je les ai écrites dans l'ordre de priorité. En effet dans un premier temps, il faut que tout le monde est le même langage pour communiquer. Ensuite, il faut que malgré le fait que plusieurs personnes travaillent sur le même projet, il y est le moins de conflit ou d'éléments qui pourraient retarder le déploiement. Et dans un troisième temps quand tout le monde peut comprendre et travailler sur l'application, que chacun puisse aussi être acteur et force de proposition dans le développement de l'app. 

---
#TODO LIST

Implémenter la db et la page admin avec le docker-compose déjà présent
Implémenter la barre de recherche
Mettre en place la selection random
Mettre en place un système de login et de favori
Faire la vue détaillé
Faire une recherche par Ingrédient
Lister les ingrédients qu'on a et voir quelle cocktail on peut réaliser
Système de notation
Ajouter ses propres cocktails dans la db du site

---

# cocktail server tuto

This is the tutorial how i build my application web, firstly i will explain how i build the server and connect to the api (thecocktaildb)
It's not very useful if you know yarn / nestJS but it's a memo for my future me. :)

npm install --global yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

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

Now i will the structure the data i receive inside a dto

interface CocktailDTO {
    id: number;
    name: string;
    description: string;
    ....
}

Now i can map the data of the db to the dto
const cocktailDTO: CocktailDTO[] = cocktails.map(cocktail => (
    {
        id: cocktail.id,
        name: cocktail.name,
        description: cocktail.description,
        ...
    }
));
)


And now i can add different route to the server (all the fonctionnality of the webapp)

# Interaction with the API

We will use the library axios to interact with the api

yarn add axios

# Structure Code
