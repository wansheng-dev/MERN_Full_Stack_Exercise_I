const Product2 = require('../models/refactor.model');

module.exports = {
  getAll(_req, res){
    Product2.find()
    .then(products => res.json(products))
    .catch(err => res.json({
      message: 'ERROR: Failed to retrieve all documents.',
      error: err
    }));
  },

  getOne(req, res){
    Product2.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(404));
  },

  create(req, res){
    Product2.create(req.body)
      .then(product => res.json(product))
      .catch(err => res.status(400).json(err));
  },

  update(req, res){
    Product2.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
      .then(product => res.json(product))
      .catch(err => res.status(400).json(err))
  },

  delete(req, res){
    Product2.findByIdAndDelete(req.params.id)
    .then(result => {
        console.log(result);
        res.json({ status: 'success' })
      })
      .catch(err => res.json({
        message: 'ERROR: Failed to delete the document.',
        error: err
      }));
  },
}