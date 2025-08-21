import { useState, useEffect } from 'react';
import adminService from '../services/adminService';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await adminService.getProducts();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const createProduct = async (productData) => {
        try {
            const newProduct = await adminService.createProduct(productData);
            setProducts(prev => [...prev, newProduct]);
            return newProduct;
        } catch (err) {
            throw err;
        }
    };

    const updateProduct = async (id, productData) => {
        try {
            const updatedProduct = await adminService.updateProduct(id, productData);
            setProducts(prev => prev.map(p => p.id === id ? updatedProduct : p));
            return updatedProduct;
        } catch (err) {
            throw err;
        }
    };

    const deleteProduct = async (id) => {
        try {
            await adminService.deleteProduct(id);
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (err) {
            throw err;
        }
    };

    return {
        products,
        loading,
        error,
        createProduct,
        updateProduct,
        deleteProduct,
        refetch: fetchProducts
    };
};