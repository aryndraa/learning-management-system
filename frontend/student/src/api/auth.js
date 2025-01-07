import apiClient from "../utils/apiClient.js";
import {hasInStorage, saveToStorage} from "../utils/storage.js";

const login = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });

    if(response.data.access_token) {
      saveToStorage('studentToken', response.data.access_token, true);
    }

    return response;
  } catch (error) {
    console.error("login failed", error);
    throw error;
  }
}

const checkLoginStatus = () => {
  return hasInStorage('studentToken', true);
}

export default { login, checkLoginStatus };