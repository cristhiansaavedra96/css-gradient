import axios from 'axios';
import config from '../config';

const baseUrl = config.NODE_SERVER_URL;

const getTemplate = async (templateName) => {
    const res = await axios.get(`${baseUrl}/template/${templateName}`);
    return res.data;
}

const getAll = async () => {
    let response = "";
    try {
        response = await axios.get(`${baseUrl}/templates`)
    } catch (e) {
        response = e;
    }
    return response.data;
}

const createTemplate = async (template) => {
    let response = "";
    try {
        response = await axios.post(`${baseUrl}/createTemplate`, template);
    } catch (e) {
        response = e;
    }
    return response.data;
}

export {
    getAll,
    getTemplate,
    createTemplate
}