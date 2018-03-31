/*
  Arduino Day Manaus 2018
	Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
	Facilitador: Prof. Orlewilson B. Maia
	Autor:       Orlewilson B. Maia
	Data:        31/03/2018
	Descrição:   Ler porta serial do Arduino
*/

// importando bibliotecas
// biblioteca para ler valores oriundas da porta serial
var SerialPort = require('serialport');

// ler cada linha enviada para porta serial
var Readline = SerialPort.parsers.Readline;

// informando a porta de comunicação
var port = new SerialPort('COM5');

// informando ao parser a linha para exibir no console do NodeJS
var parser = new Readline();
port.pipe(parser);

// enquanto houver informação enviada pela porta serial
parser.on('data', (recebido_porta_serial_arduino) => {
  console.log("==========================");  
  console.log("valor recebido: " + recebido_porta_serial_arduino);  
})

