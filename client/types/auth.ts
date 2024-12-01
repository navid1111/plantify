export interface AuthConfig {
  defaultProvider: 'credentials' | 'google';
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface SignInResponse {
  error?: string;
  success?: boolean;
  user?: User;
}
