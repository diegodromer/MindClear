import { BASE_URL } from "../utils/constants";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Email ou senha inválidos.");
    }

    const data = await response.json();

    return {
      user: data.user,
      accessToken: data.access_token,
      timer: JSON.parse(data.user.timer),
    };
  } catch (error: any) {
    console.error("[loginUser] Erro ao fazer login:", error.message);
    throw new Error(error.message || "Erro ao realizar login.");
  }
};
