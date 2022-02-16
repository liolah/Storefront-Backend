# Test Database

The server is running on port 3000 by default.  
The postgres database is running on port 5432 by default.

The default name for the test database is tests_db. However, you can change it to anything you want in the .env file by changing the value of POSTGRES_TEST_DB to your test db name (also in database.json). Make sure that the values of POSTGRES_TEST_PASSWORD matches your user password.

## Instructions for creating the test database

Using your preferred CLI, run:  
psql -U postgres  
Then enter your password.
run: CREATE DATABASE test_db;  
As of now, a new db with the name tests_db has been created. And that's all you need to begin running the tests.

## Instructions for testing

You only need to use the command: npm run test
This command runs a script which:

1. Changes the environment variables to test mode.
2. Runs the up migrations on tests_db to create the required tables and generate some dummy entries.
3. Runs tests with jasmine, and
4. Runs the down migrations to remove the tests data and tables
5. Changes the environment variables back to dev.

## Tables schemas

The database required for this project must haves the following table schemas:

#### users:

id [int - primary key]
first_name [varchar(255)]
last_name [varchar(255)]
password_digest [text]

#### products:

id [int - primary key]
name [varchar(255)]
price [int]
category [varchar(255)]

#### orders:

id [int - primary key]
user_id [int - foreign key references id from users table]
status [enum('Active', 'Complete')]

#### orders_products:

order_id [int - foreign key references id from orders table]
product_id [int - foreign key references id from products table]
quantity [int]

## The generated test data

Some of the migrations will generate some records in the previously mentioned tables, which are required in the tests. Not running all migrations will lead to the failure of some test specs.

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
