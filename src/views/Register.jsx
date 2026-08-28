import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor completa los campos");
      return;
    }
    alert("Registro exitoso. Ahora inicia sesión.");
    navigate("/login");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 bg-success text-white style={{ maxWidth: '400px', width: '100%' }}">
        <h3>Market Place</h3>
        <h5>Registrarse</h5>
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
          <div className="mb-3">
            <label className="form-label">Avatar URL</label>
            <input 
              type="text" 
              className="form-control" 
              value={avatar} 
              onChange={(e) => setAvatar(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-warning me-2">Registrarme</button>
          <button type="button" className="btn btn-light" onClick={() => navigate("/")}>Volver</button>
        </form>
      </div>
    </div>
  );
};

export default Register;