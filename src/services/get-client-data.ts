import { apiConfig } from "./api-config";

export async function getClientData(clientId: string) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);

    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
}
