import apiClient from "../utils/apiClient";

const getAllClassrooms = async (query = {}) => {
    return await apiClient.get('classroom-management/', {
        params: query
    })
}

export default { getAllClassrooms }