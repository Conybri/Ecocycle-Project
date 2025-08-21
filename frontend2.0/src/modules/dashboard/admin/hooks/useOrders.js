import { useState, useEffect } from 'react';
import adminService from '../services/adminService';

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await adminService.getOrders();
      setOrders(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const updatedOrder = await adminService.updateOrderStatus(id, status);
      setOrders(prev => prev.map(o => o.id === id ? updatedOrder : o));
      return updatedOrder;
    } catch (err) {
      throw err;
    }
  };

  return {
    orders,
    loading,
    error,
    updateOrderStatus,
    refetch: fetchOrders
  };
};