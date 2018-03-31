/*Arduino Day Manaus 2018
  Oficina:     Criando Coisas Inteligentes com NodeJS e Arduino
  Facilitador: Prof. Orlewilson B. Maia
  Autor:       Orlewilson B. Maia
  Data:        31/03/2018
  Descrição:   Aplicação para ler valor sensor de luz e enviar o valor lido para porta serial
*/

// Porta analogica no qual sera lido o valor do sensor de luminosidade
int luminosidade = A0;

// Variavel para armazenar o valor lido do sensor de luminosidade
int valorLuminosidade = 0;

// configuração do que será utilizado
void setup() {
  // Indica que utilizara a porta serial para enviar dados 
  Serial.begin(9600);
}

// programa principal
void loop() {
  // ler o valor atual do sensor de luminosidade
  // o valor varia entre 0 (escuro) e 1023 (claro)
  valorLuminosidade = analogRead(luminosidade);
  
  // imprime na porta serial o valor do sensor de luminosidade
  Serial.println(valorLuminosidade);
}
