/**
 *  Arquivo: server.js
 Descrição: Arquivo de configuraçõs e start da api
 Autor: Diogo Jorge
 Data de ciração: 14/04/2021
 */

// Configuração

// Chamada dos pacotes
var express = require("express");
var app = express();
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
var Produto = require('./app/routes/produto')

mongoose.Promise = global.Promise;

// Connection (Onde esta escrito test deve ser substituido pela nome do banco)
mongoose.connect('mongodb+srv://diogobarcelos94:barcelos123@node-crud-api.gcfoi.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Maneira local (Onde esta escrito test deve ser substituido pela nome do banco)
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Configuração da variavel App
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// Definindo a porta de execução da api
var port = process.env.port || 8000;

// Routes da API
// =========================================================================

// Criando uma instancia das routas via express
var router = express.Router();

// Declaração de um middleware
router.use(function (req, res, next) {
    console.log('req, res')
    next();
});

// Routa exempro de execução
router.get("/", function (req, res) {
    res.json({ message: "OK! Bem-Vindo!" });
});

// API's
// ========================================================================

// Rotas terminadas com '/produtos' (servir: GET ALL & POST)
router.route('/produtos')
    .get(Produto.GETALL)
    .post(Produto.POST);

// Rotas terminadas com '/produtos/:id' (servir: GET, PUT & DELETE: id)
router.route('/produtos/:id')
    .get(Produto.GET)
    .put(Produto.PUT)
    .delete(Produto.DELETE);

    

// Definindo um padrao de rotas prefixadas por '/api'
app.use("/api", router);

// Iniciando a aplicação
app.listen(port);
console.log("Api iniciada com sucesso!");
