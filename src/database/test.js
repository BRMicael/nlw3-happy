const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
 /*   await saveOrphanage(db, {
        lat : "-27.222633",
        lng: "-49.6555874",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1232132123",
        images:[ "https://images.unsplash.com/photo-1597095536985-21c85eb8c65e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1601564921647-b446839a013f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(), 
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    
        
    })
*/
    //consultar dados na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
    //console.log(await db.run('DELETE FROM orphanages WHERE id="5"'))

})

// o "async" e "await" é como se fosse um .then