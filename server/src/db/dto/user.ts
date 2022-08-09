type Providers = "google" | "email";

export type UserDTO = {
  id: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  email_certified: boolean;
  address: string | null;
  organization: string | null;
  company: string | null;
  provider: Providers | null;
  created_at: string;
  updated_at: string;
};
