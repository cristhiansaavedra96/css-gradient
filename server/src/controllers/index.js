const getTemplateByName = require('../utils/templateFunctions');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgresql-cristhiansaavedra.alwaysdata.net',
    user: 'cristhiansaavedra',
    password: 'fronterizo',
    database: 'cristhiansaavedra_pgdb',
    port: '5432'
})

const getTemplates = async (req, res) => {
    const response = await pool.query("SELECT * FROM templates");
    res.status(200).json(response.rows);
}

const createTemplate = async (req, res) => {

    let myTemplate = getTemplateByName(req.body.name);

    if (myTemplate) {
        res.status(400).send({
            message: 'Template already exists.'
        });
    }
    else {
        const { name, author, firstColor, secondColor, type, direction } = req.body;
        const response = await pool.query('INSERT INTO templates VALUES ($1, $2, $3, $4, $5, $6)', [name, author, firstColor, secondColor, direction, type]);
        res.status(200).send({
            message: 'Template added successfully.'
        });
    }
}

const getTemplate = async (req, res) => {
    const name = req.params.name;
    const response = await pool.query(`SELECT * FROM templates WHERE name= $1`, [name]);
    res.status(200).json(response.rows[0]);
}

module.exports = {
    getTemplates,
    createTemplate,
    getTemplate
}