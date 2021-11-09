const mongoose = require('../db/db')

const CadastroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    dataDia: {
        type: String,
        required: true
    },
    dataMes: {
        type: String,
        required: true
    },
    dataAno: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Cadastro = mongoose.model('Cadastro', CadastroSchema)

module.exports = Cadastro