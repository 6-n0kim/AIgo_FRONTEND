export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: { id: string; email: string };
};

export type SignupRequest = {
  email: string;
  password: string;
};

export type SignupResponse = {
  access_token: string;
  token_type: string;
  user: { id: number; email: string; is_active: boolean };
};

export type CheckEmailRequest = {
  email: string;
};

export type CheckEmailResponse = {
  available: boolean;
  message?: string;
};
