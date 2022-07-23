import { joinSerializer } from "helpers/serializer";

import type { Knex } from "knex";
import type { UserDTO } from "@dto/user";

export class UserRepository {
  constructor(private knex: Knex) {}

  async getAllUser(): Promise<UserDTO[]> {
    const result = await this.knex("user").select("*");
    return joinSerializer(result, { omit: ["user"] });
  }

  async getUserById(id: number): Promise<UserDTO[]> {
    const result = await this.knex("user").select("*").where({ id: id });
    return result.map((r) => {
      return joinSerializer(r, { omit: ["user"] });
    });
  }

  async getUserByEmail(email: string): Promise<UserDTO[]> {
    const result = await this.knex("user").select("*").where({ email: email });
    return result.map((r) => {
      return joinSerializer(r, { omit: ["user"] });
    });
  }

  async updateUserById(
    id: number,
    patchData: Partial<UserDTO>
  ): Promise<UserDTO[] | false> {
    const result = await this.knex("user").where({ ID: id }).update(patchData);
    if (!result) {
      // 업데이트가 실패한 경우
      return false;
    }
    return this.getUserById(id);
  }
}
