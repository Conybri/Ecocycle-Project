// src/modules/dashboard/admin/hooks/useAdminStats.js
import { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';

export const useAdminStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStats = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await adminService.getDashboardStats();
            setStats(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return {
        stats,
        loading,
        error,
        refetch: fetchStats
    };
};

// src/modules/dashboard/admin/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = (initialFilters = {}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });

    const fetchProducts = async (currentFilters = filters) => {
        try {
            setLoading(true);
            setError(null);
            const data = await productService.getProducts(currentFilters);
            setProducts(data.products || data);
            if (data.pagination) {
                setPagination(data.pagination);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createProduct = async (productData) => {
        try {
            setLoading(true);
            const newProduct = await productService.createProduct(productData);
            setProducts(prev => [newProduct, ...prev]);
            return newProduct;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (id, productData) => {
        try {
            setLoading(true);
            const updatedProduct = await productService.updateProduct(id, productData);
            setProducts(prev =>
                prev.map(product =>
                    product.id === id ? updatedProduct : product
                )
            );
            return updatedProduct;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await productService.deleteProduct(id);
            setProducts(prev => prev.filter(product => product.id !== id));
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateFilters = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    useEffect(() => {
        fetchProducts();
    }, [filters]);

    return {
        products,
        loading,
        error,
        filters,
        pagination,
        createProduct,
        updateProduct,
        deleteProduct,
        updateFilters,
        refetch: fetchProducts
    };
};

// src/modules/dashboard/admin/hooks/useUsers.js
import { useState, useEffect } from 'react';
import { userService } from '../services/userService';

export const useUsers = (initialFilters = {}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });

    const fetchUsers = async (currentFilters = filters) => {
        try {
            setLoading(true);
            setError(null);
            const data = await userService.getUsers(currentFilters);
            setUsers(data.users || data);
            if (data.pagination) {
                setPagination(data.pagination);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateUser = async (id, userData) => {
        try {
            setLoading(true);
            const updatedUser = await userService.updateUser(id, userData);
            setUsers(prev =>
                prev.map(user =>
                    user.id === id ? updatedUser : user
                )
            );
            return updatedUser;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        try {
            setLoading(true);
            await userService.deleteUser(id);
            setUsers(prev => prev.filter(user => user.id !== id));
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateFilters = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    useEffect(() => {
        fetchUsers();
    }, [filters]);

    return {
        users,
        loading,
        error,
        filters,
        pagination,
        updateUser,
        deleteUser,
        updateFilters,
        refetch: fetchUsers
    };
};

// src/modules/dashboard/admin/hooks/useOrders.js
import { useState, useEffect } from 'react';
import { orderService } from '../services/orderService';

export const useOrders = (initialFilters = {}) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });

    const fetchOrders = async (currentFilters = filters) => {
        try {
            setLoading(true);
            setError(null);
            const data = await orderService.getOrders(currentFilters);
            setOrders(data.orders || data);
            if (data.pagination) {
                setPagination(data.pagination);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateOrderStatus = async (id, status) => {
        try {
            setLoading(true);
            const updatedOrder = await orderService.updateOrderStatus(id, status);
            setOrders(prev =>
                prev.map(order =>
                    order.id === id ? updatedOrder : order
                )
            );
            return updatedOrder;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateFilters = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    useEffect(() => {
        fetchOrders();
    }, [filters]);

    return {
        orders,
        loading,
        error,
        filters,
        pagination,
        updateOrderStatus,
        updateFilters,
        refetch: fetchOrders
    };
};

// src/modules/dashboard/admin/hooks/useAnalytics.js
import { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';

export const useAnalytics = (initialPeriod = '30d') => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [period, setPeriod] = useState(initialPeriod);

    const fetchAnalytics = async (currentPeriod = period) => {
        try {
            setLoading(true);
            setError(null);
            const data = await adminService.getAnalytics(currentPeriod);
            setAnalytics(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updatePeriod = (newPeriod) => {
        setPeriod(newPeriod);
    };

    useEffect(() => {
        fetchAnalytics();
    }, [period]);

    return {
        analytics,
        loading,
        error,
        period,
        updatePeriod,
        refetch: fetchAnalytics
    };
};