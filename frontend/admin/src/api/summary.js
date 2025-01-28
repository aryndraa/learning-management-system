import apiClient from "../utils/apiClient";

const todaySummary = async (date) => {
    return await apiClient.get('summary/today-summary', {
        date
    });
}


const todayActivities = async (date) => {
    return await apiClient.get('today-activities', {
        date
    });
}


export default { todaySummary, todayActivities }