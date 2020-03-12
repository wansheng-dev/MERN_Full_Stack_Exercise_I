import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const EditProduct = props => {
  const [ productState, setProductState ] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/product2/' + props.id)
      .then(response => setProductState(response.data))
      .catch(console.log)
  }, [props.id]);

  const sendApiRequest = (data) => {
    return axios.put('http://localhost:8000/api/product2/update/' + props.id, data)
  }

  // const handleSubmit = (e, data) => {
  //   e.preventDefault();
  //   axios.put('http://localhost:8000/api/product2/update/' + props.id, data)
  //     .then(() => navigate('/products'))
  //     .catch(console.log)
  // };

  console.log(productState)

  if (productState === null ){
    return <h2>Loading...</h2>
  };

  return (
    <ProductForm
    initialValues = {{
      title: productState.title,
      price: productState.price,
      desc: productState.desc,
      imgURL: productState.imgURL
    }}
    // handleSubmit = { handleSubmit }
    sendApiRequest = { sendApiRequest }
  />
  )
}

export default EditProduct;