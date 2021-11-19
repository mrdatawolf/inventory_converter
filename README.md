install node.js to your system https://nodejs.org/en/
create your repo you want to use.
use github cli gh repo clone mrdatawolf/inventory_converter .  make sure you are in the parent folder of your folder gh will create for you.
npx create-next-app@latest --typescript
cd into the folder and rn npm run dev
npm i prisma --save-dev
npm i -S @premieroctet/next-crud
npm i exceljs
create .gitignore in db folder.  do a * inside of it.
npx prisma init
mkdir /db directory
update .env DATABASE_URL to point to your db see https://www.prisma.io/docs/reference/database-reference/connection-urls
update /prisma/schema.prisma with the database you choose.
edit prisma/schema.prisma to have models (see prisma.io docs)
npx prisma generate
npx prisma migrate dev
you can do npx prisma studio to see the db