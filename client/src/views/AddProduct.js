import React from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const AddProduct = () => {

  const sendApiRequest = (data) => {
    return axios.post('http://localhost:8000/api/product2/create', data);
  }

  // const handleSubmit = (e, productState) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:8000/api/product2/create', productState)
  //     .then(() => navigate('/products'))
  //     .catch(console.log)
  // }

  return (
    <ProductForm
      initialValues = {{
        title: '',
        price: 0,
        desc: '',
        imgURL: ''
      }}
      // handleSubmit = { handleSubmit }
      sendApiRequest = { sendApiRequest }
    />
  )
}

export default AddProduct;