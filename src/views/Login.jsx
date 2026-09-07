import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    const exito = await login(email, password);
    if (exito) {
      navigate("/profile");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 bg-warning" style={{ maxWidth: '400px', width: '100%' }}>
        <h3>Market Place</h3>
        <h5>Iniciar sesión</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-success me-2">Iniciar Sesión</button>
          <button type="button" className="btn btn-light" onClick={() => navigate("/")}>Volver</button>
        </form>
      </div>
    </div>
  );
};

export default Login;