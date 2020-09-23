import React from 'react';
import { useCart } from '../contexts/use-cart';

export default function Product({ product }) {
  const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className="product">
      {/* image */}
      <img src={product.image_url} alt={product.name} />

      {/* product name */}
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      {/* buttons */}
      <div className="product-buttons">
        {/* add */}
        <button className="add" onClick={() => addItem(product.sku)}>
          Agregar ({countItemsInCart(product.sku)})
        </button>
        {/* remove */}
        {countItemsInCart(product.sku) > 0 ? (
          <button className="remove" onClick={() => removeItem(product.sku)}>
            Eliminar
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
