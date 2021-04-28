
/**
 *  Arquivo: server.js
 Descrição: Responsavel por tratar os modelos de classe 'Produto"
 Autor: Diogo Jorge
 Data de ciração: 14/04/2021
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
 });

 module.exports = mongoose.model('Produto', ProdutoSchema);