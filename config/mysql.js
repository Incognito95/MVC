const { createPool } = require('mysql');
// database connection
module.exports = (createPool => () => 
    createPool({
        user: 'root',
        password: 'root',
        host: 'localhost',
        database: 'test',
        port: '8889',
        connectionLimit: 10
    })
)(createPool);