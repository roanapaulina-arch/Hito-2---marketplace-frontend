import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, UserContext } from './context/UserContext';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';

const AppRoutes = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/" element={<Home />} />
      
      {/* Rutas protegidas / condicionales */}
      <Route 
        path="/login" 
        element={!token ? <Login /> : <Navigate to="/profile" />} 
      />
      <Route 
        path="/register" 
        element={!token ? <Register /> : <Navigate to="/profile" />} 
      />
      <Route 
        path="/profile" 
        element={token ? <Profile /> : <Navigate to="/login" />} 
      />
      
      {/* Redirección por defecto si la ruta no existe */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;