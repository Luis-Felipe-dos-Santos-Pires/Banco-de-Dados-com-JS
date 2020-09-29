// Update with your config settings.
const {connection} = require('./.env')

module.exports = {
  client: 'mysql',
  connection,
// O código abaixo refere-se ao que deve estar contido em .env  
// module.exports = {
//     connection: {
//         database: 'nome-do-banco',
//         user: 'nome-do-usuario',
//         password: 'senha-do-usuario'
//     },
// }
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'

  }

};