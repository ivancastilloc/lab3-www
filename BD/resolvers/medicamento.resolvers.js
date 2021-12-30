const Medicamento = require('../models/medicamento');

module.exports = {
  Query: {
    async getMedicamentos(obj, { page, limit }){
      // Producto.find() es una busqueda de tipo mongoSchema para encontrar objetos
      const medicamentos = await Medicamento.find();
      return medicamentos;
    },
    async getMedicamento(obj, { id }){
      const medicamento = await Medicamento.findById(id);
      return medicamento;
    }
  },
  Mutation: {
    async addMedicamento(obj, { input }){
      // Crea un objeto de tipo mongoSchema
      const medicamento = new Medicamento(input);
      // Metodo de guardado de mongodb, promise
      await medicamento.save(); // Objeto flush (id se va a llenar con el id de mongodb)
      return medicamento;
    },
    async updMedicamento(obj, { id, input }){
      const medicamento = await Medicamento.findByIdAndUpdate(id, input);
      return medicamento;
    },
    async delMedicamento(obj, { id }){
      await Medicamento.deleteOne({_id : id});
      return {
        message: `El medicamento con id ${id} fue eliminado`
      }
    }
  }
};