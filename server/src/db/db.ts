import knex from "knex";

import mysqlConnectionConfig from "@constants/mysqlConnectionConfig";
import { UserRepository } from "@repository/user";

import type { Knex } from "knex";

export class MySQL {
  driver: Knex;
  user: UserRepository;

  constructor(option: Knex.Config) {
    const driver = knex(option);
    this.driver = driver;

    this.user = new UserRepository(driver);
  }
}

const dbinitialConfig = {
  client: "mysql2",
  connection: mysqlConnectionConfig,
};

const dbClient = new MySQL(dbinitialConfig);

export default dbClient;
