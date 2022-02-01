export const parseHtml = (html) => {
    return { __html: html };
}

export const generateId = (text) => {
    return text.replaceAll(" ", "-").toLowerCase();
}