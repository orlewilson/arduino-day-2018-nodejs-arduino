/*
  Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Ligar/desligar 3 LEDs usando página web 
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
  var led1 = new five.Led(13);
  var led2 = new five.Led(12);
  var led3 = new five.Led(11);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/exemplo-05-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      
      if (data == '1') {
        // ligar LED 1
        led1.on();
        // enviar resposta ao solicitante que o LED 1 foi ligado 
        socket.emit('respostaLed', 'ligado1');
      } else if (data == '2') {
        // ligar LED 2
        led2.on();  
        // enviar resposta ao solicitante que o LED 2 foi ligado 
        socket.emit('respostaLed', 'ligado2');
      } else if (data == '3') {
        // ligar LED 3
        led3.on();  
        
        // enviar resposta ao solicitante que o LED 3 foi ligado 
        socket.emit('respostaLed', 'ligado3');
      } 
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      if (data == '1') {
        // desligar LED 1
        led1.off();
        // enviar resposta ao solicitante que o LED 1 foi desligado 
        socket.emit('respostaLed', 'desligado1');
      } else if (data == '2') {
        // desligar LED 2
        led2.off();  
        // enviar resposta ao solicitante que o LED 2 foi desligado 
        socket.emit('respostaLed', 'desligado2');
      } else if (data == '3') {
        // desligar LED 3
        led3.off();  
        
        // enviar resposta ao solicitante que o LED 3 foi desligado 
        socket.emit('respostaLed', 'desligado3');
      } 
    });
  });
}); 