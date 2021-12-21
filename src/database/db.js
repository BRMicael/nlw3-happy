const Database = require('sqlite-async')// importar o sqLite async

/* Para executar os códigos somente depois de abrir o banco de dados, vamos usar a 
funcionalidade "then" que é uma funcionalidade de um objeto promisse */
// o __dirname do momento é a pasta "database"
//Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}
//exporte esse objeto
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // o objeto que vai ser exportado é o "db" que foi retornado



/* OBS: O Mayk colocou os maior parte dos dados tipo texto para ficar mais fácil e por didática não é o mais correto assim*/ 
// "node src/database/db.js" para executar esse arquivo

