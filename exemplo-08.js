/*
  Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Ler porta serial do Arduino com Johnny-Five
*/

// importando bibliotecas
// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board({port: "COM5"});

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
	// placa pronta
	console.log("Ready!");  
   
	// informando a porta que será lido o valor do sensor de luz (LDR)
	var sensorLuz = new five.Sensor("A0").scale([0, 100]);

	// se houver mudança de valor, mostrará no console o resultado
	sensorLuz.on('change', function(){
   		console.log("valor recebido: " + this.value.toFixed());
	});
}); 