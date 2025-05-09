import api from './api';

export const userService = {
  getProfile: async () => {
    try {
      const response = await api.get('/users/me');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  updateProfile: async (userData) => {
    try {
      const response = await api.patch('/users/me', userData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  updateProfilePicture: async (formData) => {
    try {
      const response = await api.post('/users/me/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  deleteAccount: async () => {
    try {
      const response = await api.delete('/users/me');
      // Clear local storage on successful deletion
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userData');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
};

export default userService;