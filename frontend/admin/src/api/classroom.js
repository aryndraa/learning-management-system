import apiClient from "../utils/apiClient";

const getAllClassrooms = async (query = {}) => {
    return await apiClient.get('classroom-management', {
        params: query
    })
}

const getClassroomById = async (id) => {
    return await apiClient.get(`classroom-management/${id}`);
}

export default { getAllClassrooms, getClassroomById }