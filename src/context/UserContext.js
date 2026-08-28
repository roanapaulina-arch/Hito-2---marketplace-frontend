import React, { createContext, useState } from "react";

// 1. Contexto
export const UserContext = createContext();

// 2. Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado para simular si el usuario inició sesión (true) o no (false)
  const [token, setToken] = useState(false);

  // Función para cerrar sesión
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};