import React from 'react';

const ProductCard = ({ producto, title, description, price, author, image }) => {
  const prodTitle = producto?.titulo || title;
  const prodDesc = producto?.descripcion || description;
  const prodPrice = producto?.precio || price;
  const prodAuthor = producto?.autor || author;
  const prodImage = producto?.imagen || image;

  return (
    <div className="card shadow-sm m-2" style={{ width: "18rem" }}>
      {prodImage && (
        <img 
          src={prodImage} 
          className="card-img-top" 
          alt={prodTitle} 
          style={{ height: "200px", objectFit: "cover" }} 
        />
      )}
      <div className="card-body">
        <h5 className="card-title fw-bold">{prodTitle}</h5>
        <p className="card-text">{prodDesc}</p>
        <p className="fw-bold text-success">Precio: ${prodPrice}</p>
        <small className="text-muted d-block">Publicado por: {prodAuthor}</small>
      </div>
    </div>
  );
};

export default ProductCard;