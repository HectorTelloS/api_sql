const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
})

//ACCEDER A LOS AUTORES POR EMAIL
const getAuthByEmail = async () => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query()

    } catch (error) {

    } finally {

    }

    return result

}

//TRAER TODOS LOS AUTORES
//CREAR AUTOR
//ELIMINAR AUTOR
//ACTUALIZAR AUTOR