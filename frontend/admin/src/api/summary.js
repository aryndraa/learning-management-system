import apiClient from "../utils/apiClient";

const getDailySummary = async (date) => {
    return await apiClient.get('summary/daily-summary', {
        date
    });
}


const getDailyActivities = async (date) => {
    return await apiClient.get('daily-activities', {
        date
    });
}


export default { getDailySummary, getDailyActivities }