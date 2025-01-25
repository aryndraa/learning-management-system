import apiClient from "../utils/apiClient";
import {hasInStorage, saveToStorage, removeFromStorage} from "../utils/storage";

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

const logout = async () => {
    try {
        const response = await apiClient.delete("auth/logout");

        if(response) {
            removeFromStorage('adminToken', true);
        }
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const checkLoginStatus = () => {
  return hasInStorage('adminToken', true);
}


export default { login, checkLoginStatus, logout }

