const Database = require('sqlite-async')


async function execute(db) {
  
    return await db.exec(`
         CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            brand TEXT,
            price TEXT,
            amount TEXT
        );
    `)
}


module.exports =  Database.open(__dirname + "/database.sqlite.db").then(execute)