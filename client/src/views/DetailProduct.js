import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DetailProduct = props => {
  const [ productState, setProductState ] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/product2/' + props.id)
      .then(response => setProductState(response.data))
      .catch(console.log)
  }, [props.id]);
  

  const handleDelete = id => {
    axios.delete('http://localhost:8000/api/product2/delete/' + id)
      .then(() => navigate('/products'))
      .catch(console.log);
  }

  if (productState === null ){
    return <h2>Loading...</h2>
  };

  return (
    <div>
      <h1> Product Title: { productState.title } </h1>
      <p> Product Price: { productState.price } </p>
      <p> Description: { productState.desc } </p>
      <img src = { productState.imgURL } alt = ''/>
      <br/>
      <button onClick = {() => navigate('/products/edit/' + productState._id)}> Edit </button> {' '}
      <button onClick = {() => handleDelete(productState._id)}> Delete </button>
    </div>
  )
}

export default DetailProduct;