/*	Arduino Day Manaus 2018
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
   
     
   server.listen(80);

   // informando que utilizará Led e qual porta
   var led = new five.Led(13);  

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/exemplo-04-web.html');
});

io.on('connection', function (socket) {
  socket.on('ligar', function (data) {
   
    led.on();
    socket.emit('respostaLed', 'ligado');

  });

  socket.on('desligar', function (data) {
    led.off();
    socket.emit('respostaLed', 'desligado');
  });
});

}); 

