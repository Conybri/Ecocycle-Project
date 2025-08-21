// src/config/axios.js
import axios from 'axios'

// Configuración global de Axios
const setupAxiosDefaults = () => {
    // Configurar base URL para todas las peticiones HTTP
    axios.defaults.baseURL = import.meta.env.VITE_API_URL

    // Interceptor para añadir token automáticamente (si existe)
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('authToken')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    // Interceptor para manejar respuestas y errores globalmente
    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            // Manejar errores de autenticación globalmente
            if (error.response?.status === 401) {
                // Token expirado o inválido
                localStorage.removeItem('authToken')
                localStorage.removeItem('user')
                window.location.href = '/login'
            }

            return Promise.reject(error)
        }
    )
}

export default setupAxiosDefaults