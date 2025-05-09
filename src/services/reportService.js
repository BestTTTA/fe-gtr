import api from './api';

export const reportService = {
  /**
   * Get GTR report data for a specific date range
   * @param {string} fromDate - Start date in YYYY-MM-DD format
   * @param {string} toDate - End date in YYYY-MM-DD format
   * @returns {Promise} - Promise with the report data
   */
  getGtrReport: async (fromDate, toDate) => {
    try {
      const response = await api.get(`/assessments/sessions/gtr-report`, {
        params: {
          from: fromDate,
          to: toDate
        }
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
};

export default reportService;