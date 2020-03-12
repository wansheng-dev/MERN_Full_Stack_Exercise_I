import React, { useState } from 'react';
import { navigate } from '@reach/router';

const ProductForm = ({ initialValues, sendApiRequest }) => {
  const [ productState, setProductState ] = useState(initialValues);
  const [ errors, setErrors ] = useState([]);  //Create an array to store errors from the API

  const handleChange = e => {
    e.preventDefault();
    setProductState({
      ...productState,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors([]); // empty out the error arr before sending out api request to backend.

    sendApiRequest(productState)
      .then(() => navigate('/products'))
      .catch(err => {  // Get the errors from err.response.data
        const arr = [];  // Define a temp error array to push the messages in

        for (const key in err.response.data.errors) {  // Loop through all errors and get the messages
          arr.push(err.response.data.errors[key].message);
        }
        
        setErrors(arr);  // Set Errors
      });
  }

  return (
    <>
      { errors.map((error, i) => (
        <p style={{color:'red'}} key={i}> { error } </p>
      ))}
      <form onSubmit = { e =>  handleSubmit (e, productState) }>
        <label>Title</label>
        <input 
          type = 'text'
          name = 'title'
          value = { productState.title }
          onChange = { handleChange }
        />
        <br/>
        <label>Price</label>
        <input 
          type = 'number'
          name = 'price'
          value = { productState.price }
          onChange = { handleChange }
        />
        <br/>
        <label>Description</label>
        <input 
          type = 'text'
          name = 'desc'
          value = { productState.desc }
          onChange = { handleChange }
        />
        <br/>
        <label>Image URL</label>
        <input 
          type = 'text'
          name = 'imgURL'
          value = { productState.imgURL }
          onChange = { handleChange }
        />
        <br/>
        <button type = 'submit'> Submit </button>
      </form>
    </>
  )
}

export default ProductForm;
