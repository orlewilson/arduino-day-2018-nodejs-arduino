// importando bibliotecas
var http = require('http');


// criando um servidor
http.createServer(function (req, res) {
    
    // informando o tipo de conteúdo
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // mostrar uma mensagem
    res.end('Hello World! Welcome to NodeJS!');

// porta na qual o servidor estará escutando
}).listen(8080); 

// mensagem no console
console.log('Sever running at http://localhost:8080/');