import React from 'react';
import { useParams } from 'react-router-dom';
import Poa_Street from './PoaHome/Poa_Street';
import Poa_Home from './PoaHome/Poa_Home';

const Products = () => {
  const { category } = useParams();

  return (
    <div>
      {category === "poa-street" && <Poa_Street />}
      {(category === "poa-home" || !category) && <Poa_Home />}
    </div>
  );
};

export default Products;

