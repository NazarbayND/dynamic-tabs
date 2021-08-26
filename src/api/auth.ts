import { apiClient } from "./client";

export const login = (email: string, password: string) =>
  apiClient.post("/", { email, password });
