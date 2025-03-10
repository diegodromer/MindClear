export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  emailVerified: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}