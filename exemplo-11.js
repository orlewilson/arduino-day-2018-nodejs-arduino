/*
  Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Ler valor de sensor de luz, ligar/desligar LED e mostrar em uma página web 
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

  // informando a porta que será lido o valor do sensor de luz (LDR)
  var sensorLuz = new five.Sensor("A0").scale([0, 100]);  

  // informando que utilizará Led e qual porta
  var led = new five.Led(13);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/exemplo-11-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // se houver mudança de valor, mostrará no console o resultado
    sensorLuz.on('change', function(){
      
      // envia resposta para a página web
      socket.emit('respostaSensor', this.value.toFixed());

      if (this.value.toFixed() < 40){
        // liga o LED
        led.on();
        socket.emit('respostaLed', 'ligado');
      } else {
        // deslliga o LED
        led.off();
        socket.emit('respostaLed', 'desligado');
      }
    });
  });
}); 