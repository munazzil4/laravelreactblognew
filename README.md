# Laravel Blog
A full stack web app made with laravel, react, inertiajs and bootstrap

### Installation
#### Database Setup
Create a database named "laravel_blog" (here is an example made in mariadb monitor)
`> create database laravel_blog;`
#### Installing dependencies
Install php dependencies running:

`composer install`

Then install javascript dependencies running:

`npm i`

then for security issues run:

`npm audit fix`

#### .env file
To setup the database and laravel settings we are gonna use the default .env file of a laravel project, and configurate it for our database (the fields that may change depending on the **computer's configuration** have a comment** "#"** after them, also this is development configuration so **never** use it in production)

```
APP_NAME=laravel_blog
APP_ENV=local
APP_KEY=base64:xp4n3YL5wy9soZFtqRyZ97f/sYfC2Q7kntyqpVQ0R00=
APP_DEBUG=true
APP_URL=http://inertia-example.test

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306 # this may change if you configured another port for your databases, so please check it
DB_DATABASE=laravel_blog
DB_USERNAME=root # you can use other database user, but please use root
DB_PASSWORD= # password may change if you configurated it for your user so please check it

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```
#### Factories
Since I haven't checked how does this work without creating users, posts and comments, please run:

`php artisan migrate:refresh --seed`

whit that I think nothing should break

### Run the project
Finally to run the laravel blog, run:

`php artisan serve`
### That's it
I hope all this works in your machine if you read this
