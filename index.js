const express = require('express');
const server = express(); // A variável server recebe express(),
                          // os parenteses indicam que o express exporta uma função,
                          // Ou seja, estamos chamando a função do express.
/* Como estamos criando uma API ou um servidor, precisamos que ele ouça alguma porta,
   definiremos esta porta com o valor 3000, como pode ser visto na linha onde está
   escrito server.listen(3000).
   Ao executarmos o localhost na porta 3000 no navegador, nosso servidor será chamado.
   Vamos iniciar criando uma primeira rota para verificarmos o funcionamento da aplicação.
   Iniciaremos utilizando o método get para testarmos no navegador.
*/
// Após salvar a aplicação, digitamos node index.js no terminal e no navegador digitamos
// localhost:3000/teste
server.get('/teste', (req, res) => {
  return res.json({message : 'Hello World!'});  
})
// O resultado da execução não aparecerá no navegador, mas aparecerá no console do terminal,
// como pode ser visto abaixo.
server.listen(3000) // Porta utilizada pelo servidor
