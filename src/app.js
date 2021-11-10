const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT

const Cadastro = require('./models/Cadastro')

app.use(express.json())

app.use(cors())

app.post('/create', async (req, res) => {
    try {
        const { nome, sobrenome, email, senha, dataDia, dataMes, dataAno } = req.body
        
        const cadastro = await Cadastro.create({ nome, sobrenome, email, senha, dataDia, dataMes, dataAno })
        
        res.send(cadastro)
    }catch(err) {
        res.status(400).send(err)
    }
})

app.get('/list', async (req, res) => {
    try {
        const cadastro = await Cadastro.find()

        res.send(cadastro)
    }catch(err) {
        res.status(400).send(err)
    }
})

app.get('/busca/:cadastro_id', async (req, res) => {
    try {
        const cadastroId = req.params.cadastro_id

        const cadastro = await Cadastro.findById(cadastroId)

        res.send({ cadastro })
    } catch(err) {
        res.status(400).send(err)
    }
})

app.patch('/update/:cadastro_id', async (req, res) => {
    try {
        const cadastroId = req.params.cadastro_id

        const { nome, sobrenome, email, senha, dataDia, dataMes, dataAno } = req.body

        const cadastro = await Cadastro.findByIdAndUpdate(cadastroId, { nome, sobrenome, email, senha, dataDia, dataMes, dataAno }, { new: true })

        res.send({ cadastro })
    } catch(err) {
        res.status(400).send(err)
    }
})

app.delete('/delete/:cadastro_id', async (req, res) => {
    try {
        const cadastroId = req.params.cadastro_id

        await Cadastro.findByIdAndDelete(cadastroId)

        res.send({ msg: 'Deletado com sucesso' })
    } catch(err) {
        res.status(400).send(err)
    }
})

app.listen(PORT, () => {
    console.log('Sever running on port: ' + PORT)
})