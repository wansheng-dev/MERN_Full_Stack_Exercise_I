import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper, Button } from '@material-ui/core';

const ListProducts = () => {
  const [ productsState, setProductsState] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:8000/api/product2')
      .then(response => setProductsState(response.data))
      .catch(console.log);
  }, []);

  const handleDelete = id => {
    axios.delete('http://localhost:8000/api/product2/delete/' + id)
      .then(() => {
        const newProducts = productsState.filter(product => product._id !== id);
        setProductsState(newProducts);
      })
      .catch(console.log);
  }

  return (
    <div>
      <Paper elevation={4}>
        <h3>List of All Registered Products</h3>
      </Paper>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { productsState.map(product => (
            <tr key = { product._id }>
            <td>
              <Link to = { '/products/' + product._id }> { product.title } </Link>
            </td>
            <td>
              <Button onClick = {() => navigate('/products/edit/' + product._id)}> Edit </Button> {' '}
              <Button onClick = {() => handleDelete(product._id)}> Delete </Button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProducts;