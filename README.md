# Welcome to Fight Service

## Project Setup
- clone the project on your local 
- Execute `npm install` on the same as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable.
     - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code.
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```