const API_URL = 'http://localhost:8080';

// User-related API calls
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return { data, status: response.status };
};

export const getUserProfile = async (token) => {
  // The user profile is returned in the login response, so this function is not strictly necessary
  // but it's here for completeness if you add a separate endpoint for it.
  const response = await fetch(`${API_URL}/usuarios/profile`, { // Assuming a /profile endpoint
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return response.json();
};

// Product-related API calls
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};
