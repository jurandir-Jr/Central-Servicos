const http = require('http');


const PORT = 8080;




const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');


 if (req.url === '/') {
   res.statusCode = 200;
   res.end('Central de Serviços Web');
 } else if (req.url === '/alunos') {
   res.statusCode = 200;
   res.end('Serviço de consulta de alunos disponível.');
 } else if (req.url === '/professores') {
   res.statusCode = 200;
   res.end('Serviço de consulta de professores disponível.');
   } else if (req.url === '/horarios') {
   res.statusCode = 200;
   res.end('Serviço de consulta de horários disponível.');
 } else if (req.url === '/contato') {
   res.statusCode = 200;
   res.end('Entre em contato com a secretaria.');
   } else if (req.url === '/biblioteca ') {
   res.statusCode = 200;
   res.end('Oi Liliane');
 } else { 
   res.statusCode = 404;
   res.end('Serviço não encontrado.');
 }
});


server.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});