type RegisterData = {
  username: string;
  password: string;
  confirmPass: string;
  fullName: string;
};

type ApiError = {
  message: string | string[] | { msg: string }[];
};
export type { RegisterData, ApiError };
