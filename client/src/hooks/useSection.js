import { generateId, parseHtml } from "../utils/htmlFunctions";

export const useSection = (text, content) => {
    const id = generateId(text);
    const parsedContent = parseHtml(content);
    return { id, parsedContent }
}