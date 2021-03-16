## HTTP notification system

This is a simple implementation of a HTTP notification system.

## Installation set up

The following are the steps to follow to installing and setting up this project on your machine.


### Prerequisites


You must have NodeJS and GIT installed globally on your machine. NodeJS comes with NPM (Node Package Manager) 
which is required to install and manage dependencies. You must also have a running instance of a MYSQL 
server on your device.


Visit [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) to install on ubuntu.

To install git, Visit [here](https://www.atlassian.com/git/tutorials/install-git) 

To install MYSQL, Visit [here](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04) 

After the installation of the prerequisites, clone the repository

```bash
sudo git clone https://github.com/dreal007/Pangaea-Test.git
```

- Change directory to the project's folder

- Run npm install install project depencies
```bash
npm install
```

- Rename sample.env to .env, then edit it's content
```bash
DB_USER_DEV="your database user"
DB_PASSWORD_DEV="your database password"
DB_NAME_DEV="database name"
DB_HOST_DEV="127.0.0.1"
```

- Set up the database
```bash
npm run setup
```

- Start the application. The publishing server runs on port 8000, while the first and second subscriber servers
run on ports 9000 and 9900 respectively

```bash
npm run start.
```

## Create Build 

- Create a build for the project located in the lib folder
```bash
sudo npm run build
```

### Extras 

- [Here's](https://documenter.getpostman.com/view/2849032/Tz5s5cX1) the link to the postman API documentation. 



