export type Authentication = {
  username: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string;
  username: string;
}

export type ErrorMessages = {
  message: string[]
}