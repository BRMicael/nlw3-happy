
// importar dependencia
const express = require('express'); // o require chama os nossos pacotes (dependências)
const path = require('path'); // o path faz parte do node
const pages = require('./pages.js');

// iniciando o express
const server = express(); // a variavel acima se tornou um função por receber uma

server
//utilizar body do req
.use(express.urlencoded({ extended: true }))
// utilizando os arquivos estáticos
.use(express.static('public')) // agora vai ser necessário tirar o "./public" do meus arquivos no hmtl


//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')




// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)
// execute um "node src/server.js"
// e acesse a porta no navegador http://127.0.0.1:5500/