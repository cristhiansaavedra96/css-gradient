const templates = require('../store/templates');

const getTemplateByName = (name) => {
    return templates.find(template => template.name === name);
}

module.exports = getTemplateByName;