import apiClient from "../utils/apiClient.js";

const avatarProfile = async () => {
  const response = await apiClient.get("profile/avatar");

  return response;
}

export default { avatarProfile };