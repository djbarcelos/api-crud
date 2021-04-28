/**
 *  Arquivo: ./routes/produtos.js
 Descrição: As rotas da  minha aplicação
 Autor: Diogo Jorge
 Data de ciração: 14/04/2021
 */

var mongoose = require('mongoose');
var Produto = require('../models/produto');


// METODO POST
function POST(req, res) {
    var produto = new Produto();

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    produto.save(function (error) {
        if (error)
            res.send("Error so tentar salvar." + error);

        res.json({
            message: 'Salvo com sucesso!'
        })
    });
}

// METODO GET ALL
function GETALL(req, res) {
    Produto.find(function (error, produtos) {
        if (error)
            res.send("Error ao selecionar todos." + error);

        res.json(produtos);
    });
}

// GET :id
function GET(req, res) {

    // Selecionar um determinado produto
    Produto.findById(req.params.id, function (error, produto) {
        if (error)
            res.send("Erro ao selecionar o id " + req.params.id + " : " + error);

        res.json(produto);
    })
}

// PUT :id
function PUT(req, res) {

    // Selecionar um determinado produto
    Produto.findById(req.params.id, function (error, produto) {

        if (error)
            res.send("Erro ao selecionar o id " + req.params.id + " : " + error);

        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function (error) {
            if (error)
                res.send("Erro ao atualizar. " + error);

            res.json({
                message: "Atualizado com sucesso!"
            });
        });
    });
}

// DELETE :id
function DELETE(req, res) {

    Produto.remove({
        _id: req.params.id
    },
        function (error) {
            if (error)
                res.send("Não encontrado. " + error);

            res.json({
                message: 'Excluido com sucesso!'
            })
        });
}



module.exports = { GETALL, POST, GET, PUT, DELETE };