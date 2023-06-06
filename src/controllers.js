const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'likeme',
    allowExitOnIdle: true
});

const agregarPost = async (titulo, img, descripcion) => {
    const pgQuery = "INSERT INTO posts values (DEFAULT, $1, $2, $3)";
    const values = [titulo, img, descripcion];
    const result = await pool.query(pgQuery, values);
};

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts;");
    return rows
};

module.exports = { agregarPost, obtenerPosts };