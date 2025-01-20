import apiClient from "../utils/apiClient";
import {hasInStorage, saveToStorage} from "../utils/storage";

const login = async (username, password) => {
    try {
        const response = await apiClient.post("auth/login",{
            username,
            password
        });
    
        if (response.data.access_token) {
            saveToStorage('adminToken', response.data.access_token, true);
        }

        return response
    } catch (error) {
        console.error("login failed", error)
        throw error
    }
}

const checkLoginStatus = () => {
  return hasInStorage('adminToken', true);
}

export default { login, checkLoginStatus }

