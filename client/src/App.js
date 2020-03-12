import React from 'react';
import './App.css';
import { Router, Link, Redirect } from '@reach/router';

import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';
import ListProduct from './views/ListProduct';
import DetailProduct from './views/DetailProduct';
import NotFound from './views/NotFound';
import MaterialUI from './views/MaterialUI';

function App() {
  return (
    <div className="App">
      <Link to = '/products'> Product List </Link>
      <br/>
      <Link to = '/products/add'> Add Product </Link>
      <br/>
      <Link to = '/materialui'> Material UI </Link>
      <Router>
        <NotFound default />
        <Redirect from = '/' to = 'products' noThrow/>
        <ListProduct path = 'products'/>
        <AddProduct path = 'products/add'/>
        <DetailProduct path = 'products/:id'/>
        <EditProduct path = 'products/edit/:id'/>
        <MaterialUI path = 'materialui' />
      </Router>
    </div>
  );
}

export default App;
