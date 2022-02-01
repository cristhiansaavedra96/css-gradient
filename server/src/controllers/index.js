require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const getTemplates = async (req, res) => {
    const response = await pool.query("SELECT * FROM templates");
    res.status(200).json(response.rows);
}

const createTemplate = async (req, res) => {
    const { name, author, firstColor, secondColor, type, direction } = req.body;
    if(await templateExists(name)) {
        res.status(200).send({
            message: 'DUPLICATE'
        });
    } else {
        const response = await pool.query('INSERT INTO templates VALUES ($1, $2, $3, $4, $5, $6)', [name, author, firstColor, secondColor, direction, type]);
        res.status(200).send({
            message: 'OK'
        });
    }
}

const getTemplate = async (req, res) => {
    const name = req.params.name;
    const response = await pool.query(`SELECT * FROM templates WHERE name= $1`, [name]);
    res.status(200).json(response.rows[0]);
}

const templateExists = async (name) => {
    const response = await pool.query(`SELECT * FROM templates WHERE name= $1`, [name]);
    return response.rows[0] ? true : false;
}

module.exports = {
    getTemplates,
    createTemplate,
    getTemplate
}