# dailyDiary

## About
This app is a digital diary. Users can record their thoughts, feelings, what they did that day or anything else they want to write.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies.

### Database Prep
- Access the MySQL interface in your terminal
- Create a new database called budget: `create database budget`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=diary
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create the tables used in this database.

### Development

- Run `npm start` in project directory to start the Express server.
- In another terminal, do `cd client` and run `npm start` to start the client. 

## DatabaseSchema



## User flow diagram



## Possible Future Extensions
