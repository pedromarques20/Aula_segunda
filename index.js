const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
const connection = require("./database/database");

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com o banco de dados.")
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })
    

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Express usar o EJS como view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(8080, () => {
    console.log("app rodando");
});

app.get("/", (req, res) => {
    var exibirNome = true;
    var nome = "Pedro marques";
    var idade = 20; 
    var produtos = [
        {nome: "Abacaxi", preco: 3},
        {nome: "Mamão", preco: 2},
        {nome: "Treloso Black", preco: 2.70}
    ]
    res.render("index", {
        exibiNome: exibirNome,
        nome: nome,
        idade: idade,
        produtos: produtos
    });
});

app.get("/usuario", (req, res) => {
    res.send("Oi usuário!");
});

app.get("/produto", (req, res) => {
    res.render("produto");
});

app.post("/salvarProduto", (req, res) => {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    res.send("Form recebido: "+nome+"<br/> Descrição: "+descricao);
});
