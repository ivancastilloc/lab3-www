const mongoose = require('mongoose');

//Declaración del modelo de medicamento
const medicamentoSchema = mongoose.Schema({
  nombre: String,
  stock: Number,
  valor: Number,
});

// Exportando modularmente a producto como mongo schema
module.exports = mongoose.model('Medicamento', medicamentoSchema);
