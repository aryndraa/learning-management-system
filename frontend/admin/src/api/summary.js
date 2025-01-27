import apiClient from "../utils/apiClient";

const todaySummary = async () => {
    return await apiClient.get('summary/today-summary');
}

export default {todaySummary}