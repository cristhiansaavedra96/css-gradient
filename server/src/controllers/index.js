const template = require('../models/template');
const templates = require('../store/templates');
const getTemplateByName = require('../utils/templateFunctions');

const getTemplates = async (req, res) => {
    await res.send(templates);
}

const createTemplate = async (req, res) => {

    let myTemplate = getTemplateByName(req.body.name);

    if (myTemplate) {
        res.status(400).send({
            message: 'Template already exists.'
        });
    }
    else {
        await templates.push(new template(
            req.body.name,
            req.body.firstColor,
            req.body.secondColor,
            req.body.direction,
            req.body.type,
            req.body.author));
        res.status(200).send({
            message: 'Template added successfully.'
        });
    }
}

const getTemplate = async (req, res) => {
    let myTemplate = getTemplateByName(req.params.name);
    
    if (myTemplate) {
        res.status(200).send({
            myTemplate
        });
    }
    else {
        res.status(400).send({
            message: 'Template does not exist.'
        });
    }
}

module.exports = {
    getTemplates,
    createTemplate,
    getTemplate
}