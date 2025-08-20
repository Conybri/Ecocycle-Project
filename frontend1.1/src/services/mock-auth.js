// Mock authentication for dashboard testing
// Remove this file when your backend is available

const MOCK_USERS = [
  {
    id: 1,
    email: "admin@ecocycle.com",
    password: "admin123",
    nombre: "Administrador",
    tipo: "admin"
  },
  {
    id: 2,
    email: "usuario@ecocycle.com", 
    password: "usuario123",
    nombre: "Usuario Normal",
    tipo: "usuario"
  }
];

export const mockLogin = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = MOCK_USERS.find(u => 
    u.email === credentials.email && u.password === credentials.password
  );
  
  if (!user) {
    throw new Error('Credenciales inválidas');
  }
  
  return {
    jwt: 'mock-jwt-token-' + user.id,
    usuario: {
      id: user.id,
      email: user.email,
      nombre: user.nombre,
      tipo: user.tipo
    }
  };
};

export const mockRegister = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  const existingUser = MOCK_USERS.find(u => u.email === userData.email);
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }
  
  const newUser = {
    id: MOCK_USERS.length + 1,
    email: userData.email,
    nombre: userData.nombre,
    tipo: "usuario"
  };
  
  MOCK_USERS.push(newUser);
  
  return {
    mensaje: 'Usuario registrado exitosamente',
    usuario: newUser
  };
};