import { authApi } from "./api";

export const signUp = async (email: string, password: string) => {
  try {
    const response = await authApi.post("/signup", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

export const login = async (email: string, password: string) => {
  try {
    const response = await authApi.post("/signin", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}