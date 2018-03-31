/*
  Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Ligar/desligar LED usando página web 
*/

// importando bibliotecas
// biblioteca para trabalhar com páginas web
var app = require('express')();

// biblioteca para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// biblioteca para criar conexão socket
var io = require('socket.io')(server);

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board({port: "COM5"});
 
// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  server.listen(8080);

  // mensagem no console
  console.log('Sever running at http://localhost:8080/');

  // informando que utilizará Led e qual porta
  var led = new five.Led(13);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/exemplo-04-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      // ligar LED
      led.on();

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('respostaLed', 'ligado');
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      // desligar LED
      led.off();

      // enviar resposta ao solicitante que o LED foi desligado
      socket.emit('respostaLed', 'desligado');
    });
  });
}); 