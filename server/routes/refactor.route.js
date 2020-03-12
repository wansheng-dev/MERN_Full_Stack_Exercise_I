const Product2Controller = require('../controllers/refactor.controller');

module.exports = app => {
  app.get('/api/product2', Product2Controller.getAll);
  app.get('/api/product2/:id', Product2Controller.getOne);
  app.post('/api/product2/create', Product2Controller.create);
  app.put('/api/product2/update/:id', Product2Controller.update);
  app.delete('/api/product2/delete/:id', Product2Controller.delete);
}