import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductCard = ({productData}) => {
  const { id, name, category, brand, color, price, images, rating } = productData;
  return (
    <>
      <div className="card" key={id} style={{ border: '1px solid white', maxWidth: '300px' }}>
        <img src={images?.[0]} width={300} height={300} alt={name} />
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <p>Color: {Array.isArray(color) ? color.join(', ') : color}</p>
        <p>Price: ₹{price}</p>
        <p>Rating: ⭐{rating}</p>
        <Link to={`/product/${id}`}>More details</Link>
        <button>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
