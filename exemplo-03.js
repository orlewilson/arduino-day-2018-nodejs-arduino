/*	Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Aplicação para ligar/desligar led 
*/

// importando bibliotecas
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board({port: "COM5"});

// quando a placa estiver prota, execute.
board.on("ready", function() {  
   // placa pronta
   console.log("Ready!");  
   // informando que utilizará Led e qual porta
   var led = new five.Led(13);  
   
   // liga/desliga a cada 1s
   led.blink(1000);  
}); 
