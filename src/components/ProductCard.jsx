import React from 'react';

const ProductCard = ({ title, description, price, author, image }) => {
  return (
    <div className="card shadow-sm m-2" style={{ width: "18rem" }}>
      {/* Si viene una imagen, la muestra */}
      {image && (
        <img 
          src={image} 
          className="card-img-top" 
          alt={title} 
          style={{ height: "200px", objectFit: "cover" }} 
        />
      )}
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold text-success">Precio: ${price}</p>
        <small className="text-muted d-block">Publicado por: {author}</small>
      </div>
    </div>
  );
};

export default ProductCard;