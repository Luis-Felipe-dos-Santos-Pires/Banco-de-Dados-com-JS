# Banco-de-Dados-com-JS
Integrando uma aplicação CRUD simples com knex e mysql

  Na pasta config temos o arquivo que será referenciado como o banco de dados. Ele faz referência ao arquivo knefile.js
  
  O arquivo knexfile.js é quem faz a conexão com o banco de dados, onde os detalhes do banco estão em um arquivo .env que não está presente neste repositório por questões de segurança.
 
 Para fazer o essa aplicação rodar em seu computador você deve adicionar um arquivo .env com o nome do banco, o usuario e a senha, os quais possuem um exemplo no arquivo knexfile.js.
  
  A pasta migrations possuem arquivos gerados com o knex para cirar as tableas em nosso mysql.
  
  A pasta testes refere-se ao CRUD da aplicação sendo testado.
