import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // [1] 'anotacoes_aula02.txt
    },
    useNullAsDefault: true

})

export default connection;