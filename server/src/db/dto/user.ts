import type { CourseDTO } from "./course";

export type UserDTO = {
  id: string;
  email: string | null;
  name: string | null;
  courses: CourseDTO;
};
