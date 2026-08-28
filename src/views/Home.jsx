import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold">Bienvenidos a MarketPlace 🛒</h1>
      <p className="lead">La plataforma perfecta para comprar y vender.</p>
      <div className="mt-4">
        <Link to="/login" className="btn btn-warning me-3 btn-lg">Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-success btn-lg">Registrate</Link>
      </div>
    </div>
  );
};

export default Home;