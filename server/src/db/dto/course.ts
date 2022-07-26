type StatusType = "ONGOING" | "PENDING" | "FINISHED";

export type CourseDTO = {
  id: string;
  name: string;
  status: StatusType;
  description: string | null;
  expired_at: string | null;
};
