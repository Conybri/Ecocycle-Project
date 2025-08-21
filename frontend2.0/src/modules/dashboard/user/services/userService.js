// src/modules/dashboard/user/services/userService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Configurar interceptor para incluir token
const userAPI = axios.create({
    baseURL: API_URL,
});

userAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const userService = {
    // Get user dashboard stats
    getDashboardStats: async () => {
        try {
            const response = await userAPI.get('/user/dashboard/stats');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener estadísticas');
        }
    },

    // Get user profile
    getProfile: async () => {
        try {
            const response = await userAPI.get('/user/profile');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener perfil');
        }
    },

    // Update user profile
    updateProfile: async (profileData) => {
        try {
            const response = await userAPI.put('/user/profile', profileData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al actualizar perfil');
        }
    },

    // Get user activity
    getActivity: async () => {
        try {
            const response = await userAPI.get('/user/activity');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener actividad');
        }
    },

    // Get loyalty points
    getLoyaltyPoints: async () => {
        try {
            const response = await userAPI.get('/user/loyalty');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener puntos de fidelidad');
        }
    }
};

// src/modules/dashboard/user/services/orderService.js
export const orderService = {
    // Get user orders
    getMyOrders: async (filters = {}) => {
        try {
            const params = new URLSearchParams(filters);
            const response = await userAPI.get(`/user/orders?${params}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener órdenes');
        }
    },

    // Get order by ID
    getOrderById: async (id) => {
        try {
            const response = await userAPI.get(`/user/orders/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener orden');
        }
    },

    // Create new order
    createOrder: async (orderData) => {
        try {
            const response = await userAPI.post('/user/orders', orderData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al crear orden');
        }
    },

    // Cancel order
    cancelOrder: async (id) => {
        try {
            const response = await userAPI.patch(`/user/orders/${id}/cancel`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al cancelar orden');
        }
    },

    // Reorder
    reorder: async (orderId) => {
        try {
            const response = await userAPI.post(`/user/orders/${orderId}/reorder`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al reordenar');
        }
    },

    // Track order
    trackOrder: async (trackingNumber) => {
        try {
            const response = await userAPI.get(`/user/orders/track/${trackingNumber}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al rastrear orden');
        }
    }
};

// src/modules/dashboard/user/services/storeService.js
export const storeService = {
    // Get store products
    getProducts: async (filters = {}) => {
        try {
            const params = new URLSearchParams(filters);
            const response = await userAPI.get(`/store/products?${params}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener productos');
        }
    },

    // Get product by ID
    getProductById: async (id) => {
        try {
            const response = await userAPI.get(`/store/products/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener producto');
        }
    },

    // Get featured products
    getFeaturedProducts: async () => {
        try {
            const response = await userAPI.get('/store/products/featured');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener productos destacados');
        }
    },

    // Get recommended products
    getRecommendedProducts: async () => {
        try {
            const response = await userAPI.get('/store/products/recommended');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener productos recomendados');
        }
    },

    // Add to favorites
    addToFavorites: async (productId) => {
        try {
            const response = await userAPI.post('/user/favorites', { productId });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al agregar a favoritos');
        }
    },

    // Remove from favorites
    removeFromFavorites: async (productId) => {
        try {
            const response = await userAPI.delete(`/user/favorites/${productId}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al remover de favoritos');
        }
    },

    // Get user favorites
    getFavorites: async () => {
        try {
            const response = await userAPI.get('/user/favorites');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener favoritos');
        }
    },

    // Add to cart
    addToCart: async (productId, quantity = 1) => {
        try {
            const response = await userAPI.post('/user/cart', { productId, quantity });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al agregar al carrito');
        }
    },

    // Get cart
    getCart: async () => {
        try {
            const response = await userAPI.get('/user/cart');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al obtener carrito');
        }
    },

    // Update cart item
    updateCartItem: async (itemId, quantity) => {
        try {
            const response = await userAPI.put(`/user/cart/${itemId}`, { quantity });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al actualizar carrito');
        }
    },

    // Remove from cart
    removeFromCart: async (itemId) => {
        try {
            const response = await userAPI.delete(`/user/cart/${itemId}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al remover del carrito');
        }
    },

    // Clear cart
    clearCart: async () => {
        try {
            const response = await userAPI.delete('/user/cart');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error al limpiar carrito');
        }
    }
};