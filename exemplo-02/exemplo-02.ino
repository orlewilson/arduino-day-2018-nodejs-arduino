/*Arduino Day Manaus 2018
  Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
  Facilitador: Prof. Orlewilson B. Maia
  Autor:       Orlewilson B. Maia
  Data:        31/03/2018
  Descrição:   Aplicação para ligar/desligar led
*/

// Porta digital no qual sera colocado um LED para ser ligado e desligado
int led = 13;

// configuração do que será utilizado
void setup() {
  // Indica qual porta digital sera utilizada como saida (ligar/desligar um LED)
  pinMode(led, OUTPUT); 
}

// programa principal
void loop() {
  // Funcao do Arduino para ligar o LED (colocar nivel alto, ou seja, 5V)
  digitalWrite(led, HIGH);

  // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000); // 1 segundo

  // Funcao do Arduino para desligar o LED (colocar nivel baixo, ou seja, 0V)  
  digitalWrite(led, LOW);
  
  // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000); // 1 segundo
}
