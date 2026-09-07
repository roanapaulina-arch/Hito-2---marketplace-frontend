import React, { createContext, useState } from "react";

export const UserContext = createContext();

const URL_BASE = "https://marketplace-backend-b16l.onrender.com";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [user, setUser] = useState(null);

  // Registro de usuario
  const register = async (email, password) => {
    try {
      const response = await fetch(`${URL_BASE}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error al registrarse");
      return data;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  // Inicio de sesión
  const login = async (email, password) => {
    try {
      const response = await fetch(`${URL_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Credenciales incorrectas");

      localStorage.setItem("token", data.token);
      setToken(data.token);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  // Obtener perfil del usuario autenticado
  const getUser = async () => {
    if (!token) return;
    try {
      const response = await fetch(`${URL_BASE}/usuarios`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) setUser(data);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        register,
        login,
        getUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};