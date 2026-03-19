import { api } from "@/lib/api";
import type { RegisterData, ApiError } from "../types/types";

export const registerUser = async (data: RegisterData) => {

  const res = await api("http://localhost:6004/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  if (!res.ok) {
    throw resData as ApiError;
  }

  return { ...resData, status: res.status, ok: res.ok };
};
