## Storefront backend

### Scripts:

###### npm run start

To start running the server with nodemon

###### npm run build

To compile the project to js in /dist

###### npm run test

1. Runs the up migrations on the test database
2. Starts tests with jasmine
3. Runs down migrations to wipe the database again

### Database instructions

###### Development database

The development database should be named store_db and/or the credentials in the .env file should be modified to match the database you want to use.

###### Test Database

The test database is called tests_db, it's selected by default. To switch to the dev database change ENV variable inside .env to dev.

### Important notes

Before runnig tests, make sure that you have the required database with the correct name and check if the table names will conflict with any tables you might have in your db. THE TABLES WILL BE WIPED CLEAN AFTER EACH TEST.

### Endpoints

###### GET /. Says welcome :)

###### POST /login. takes user id and password and returns an auth token

###### GET /users. shows all users in the db - [requires token]

###### GET /users/:userId. to show a specific user. Each user can view only his data. [requires token]

###### POST /users. to create a user. [requires token]

###### DELETE /users/:userId. deletes the user. Each user can delete only his data. [requires token]

---

###### GET /products. Shows all the products in the db

###### GET /products/:productId. Shows a specific product with id of productId.

###### GET /products/MostPopular. Shows top 5 popular products.

###### GET /products/category/:category. Shows all the products within a specific category

###### POST /products. Creates a new product. [requires token]

###### DELETE /products/:productId. Deletes the product. [requires token]

---

###### GET /user/:userId/orders. Shows the active orders for a specific users. Each user can view only his orders. [requires token]

###### GET /user/:userId/orders/completed. Shows the completed orders for a specific user. Each user can view only his orders. [requires token]
