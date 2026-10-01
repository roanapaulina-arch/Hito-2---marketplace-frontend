import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const URL_BASE = "https://marketplace-backend-b16l.onrender.com";

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

    const fallbackProducts = [
    {
      id: 1,
      titulo: "Batería electrónica Alesis Nitro Mesh",
      descripcion: "La mejor batería para iniciar en el mundo de la percusión, poco uso.",
      precio: "350.000",
      autor: "Travis Barker",
      imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500"
    },
    {
      id: 2,
      titulo: "Guitarra Eléctrica Fender Stratocaster",
      descripcion: "Sonido clásico, excelente estado con funda y accesorios incluidos.",
      precio: "450.000",
      autor: "Jimi Hendrix",
      imagen: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500"
    },
    {
      id: 3,
      titulo: "Teclado Sintetizador Roland Juno",
      descripcion: "Ideal para producción musical, diseño sonoro y presentaciones en vivo.",
      precio: "600.000",
      autor: "SynthMaster",
      imagen: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500"
    }
  ];

  useEffect(() => {
    const getPublicaciones = async () => {
      try {
        const response = await fetch(`${URL_BASE}/publicaciones`);
        const data = await response.json();
        if (response.ok && data.length > 0) {
          setPublicaciones(data);
        } else {
          
          setPublicaciones(fallbackProducts);
        }
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
        
        setPublicaciones(fallbackProducts);
      } finally {
        setCargando(false);
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

      <div className="row justify-content-center">
        {cargando ? (
          <p className="text-muted">Cargando publicaciones...</p>
        ) : (
          publicaciones.map((prod) => (
            <div key={prod.id || prod._id} className="col-md-4 mb-4 d-flex justify-content-center">
              <ProductCard producto={prod} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;