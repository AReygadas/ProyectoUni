const mysql = require('mysql2/promise')
const dataDB = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'latinoamricana'
}

module.exports = {
    Query: {
        getCursos: async () => {
            const connection = await mysql.createConnection(dataDB)
            const [row, fields] = await connection.execute('Select * from ...');
            return rows
        },
        getCurso: async (root, args)=> {
            const connection = await mysql.createConnection(dataDB)
            const [rows, fields] = await connection.execute(`SELECR * FROM ... WHERE id = ${args.id}`);
            return rows[0]

        }
    }
}