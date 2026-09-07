import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const URL_BASE = "https://marketplace-backend-b16l.onrender.com";

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const getPublicaciones = async () => {
      try {
        const response = await fetch(`${URL_BASE}/publicaciones`);
        const data = await response.json();
        if (response.ok) {
          setPublicaciones(data);
        }
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      }
    };

    getPublicaciones();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold">Bienvenidos a MarketPlace 🛒</h1>
      <p className="lead">La plataforma perfecta para comprar y vender.</p>
      
      <div className="mt-4 mb-5">
        <Link to="/login" className="btn btn-warning me-3 btn-lg">Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-success btn-lg">Registrate</Link>
      </div>

      <div className="row">
        {publicaciones.length > 0 ? (
          publicaciones.map((prod) => (
            <div key={prod.id} className="col-md-4 mb-4">
              <ProductCard producto={prod} />
            </div>
          ))
        ) : (
          <p className="text-muted">Cargando publicaciones...</p>
        )}
      </div>
    </div>
  );
};

export default Home;