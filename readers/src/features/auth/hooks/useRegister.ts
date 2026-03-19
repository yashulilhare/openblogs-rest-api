import { registerUser } from "../api/register";
import type { FormEvent } from "react";
import type { ApiError, RegisterData } from "../types/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const username = form.get("username");
    const fullName = form.get("fullName");
    const password = form.get("password");
    const confirmPass = form.get("confirmPass");
    try {
      if (
        typeof username !== "string" ||
        typeof fullName !== "string" ||
        typeof password !== "string" ||
        typeof confirmPass !== "string"
      ) {
        throw new Error("Invalid form submission");
      }

      const requiredData: RegisterData = {
        username,
        fullName,
        password,
        confirmPass,
      };

      const res = await registerUser(requiredData);
      if (res.ok) {
        navigate("/login");
      }
      setResponse(res);
    } catch (err) {
      setError(err as ApiError);
    }
  };

  return { handleSubmit, error, response };
}
