import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import ProductCard from '../components/ProductCard';

const Profile = () => {
  const { user, getUser, logout } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  const products = [
    {
      id: 1,
      title: "Batería electrónica Alesis Nitro Mesh",
      description: "La mejor batería para iniciar en el mundo de la percusión, poco uso.",
      price: "350.000",
      author: "Travis Barker",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500"
    }
  ];

  return (
    <div className="d-flex">
      <div className="bg-warning p-4" style={{ width: '250px', minHeight: '100vh' }}>
        <h3>Mi Perfil</h3>
        {user ? (
          <div className="mt-3">
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <p className="text-muted mt-3">Cargando datos...</p>
        )}
        <button onClick={logout} className="btn btn-danger mt-5">Cerrar Sesión</button>
      </div>
      <div className="p-4 flex-grow-1">
        <div className="d-flex flex-wrap">
          {products.map((item) => (
            <ProductCard 
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              author={item.author}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;