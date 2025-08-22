import axios from 'axios';

const adminService = {
  // Dashboard stats
  getDashboardStats: async () => {
    try {
      // TODO: Implement this endpoint in the backend
      const response = await axios.get('/admin/dashboard-stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Products
  getProducts: async () => {
    try {
      const response = await axios.get('/materiales');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  createProduct: async (productData) => {
    try {
      const response = await axios.post('/materiales', productData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const response = await axios.put(`/materiales/${id}`, productData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`/materiales/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Users
  getUsers: async () => {
    try {
      const response = await axios.get('/usuarios');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateUserStatus: async (id, status) => {
    try {
      const response = await axios.patch(`/usuarios/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Orders
  getOrders: async () => {
    try {
      const response = await axios.get('/historial-reciclaje');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateOrderStatus: async (id, status) => {
    try {
      const response = await axios.patch(`/historial-reciclaje/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Analytics
  getAnalytics: async (period = '7d') => {
    try {
      // TODO: Implement this endpoint in the backend
      const response = await axios.get('/admin/analytics', {
        params: { period },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default adminService;