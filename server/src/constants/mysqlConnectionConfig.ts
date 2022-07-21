const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

const mysqlConnectionConfig = {
  host: MYSQL_HOST,
  port: +(MYSQL_PORT ?? ""),
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  nestTables: "__",
};

export default mysqlConnectionConfig;
