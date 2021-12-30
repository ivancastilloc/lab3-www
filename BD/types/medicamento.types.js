module.exports = `
  type Medicamento{
    id: ID!
    nombre: String!
    valor: Int
    stock: Int
  }

  type Alert{
    message: String
  }

  input MedicamentoInput{
    nombre: String
    valor: Int
    stock: Int
  }

  extend type Query{
    getMedicamentos(page: Int, limit: Int = 1): [Medicamento]
    getMedicamento(id: ID!): Medicamento
  }

  extend type Mutation {
    addMedicamento(input: MedicamentoInput): Medicamento
    updMedicamento(id: ID!, input: MedicamentoInput): Medicamento
    delMedicamento(id: ID!): Alert
  }
`