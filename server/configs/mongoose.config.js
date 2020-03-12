const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/refactordb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database Staute: Connected.'))
  .catch((err) => console.log('ERROR: Database is NOT connected.'))