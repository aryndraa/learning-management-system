import apiClient from "../utils/apiClient";

const todaySummary = async () => {
    return await apiClient.get('summary/today-summary');
}


const todayActivities = async () => {
    return await apiClient.get('today-activities');
}


export default { todaySummary, todayActivities }