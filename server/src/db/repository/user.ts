import type { Knex } from "knex";
import type { UserDTO } from "@dto/user";

export class UserRepository {
  constructor(private knex: Knex) {}

  async getAllUser(): Promise<UserDTO[]> {
    return this.knex("user").select("*");
  }

  async getUser(userId: string): Promise<UserDTO[]> {
    return this.knex("user").select("*").where({ id: userId });
  }
}
