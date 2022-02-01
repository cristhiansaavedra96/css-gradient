import { useState, useEffect } from "react";
import { getAll } from "../services/templates";

export const useLoadModal = () => {

    const [templates, setTemplates] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll().then(templates => {
            setLoading(false);
            setTemplates(templates)
        });
    }, []);

    return { templates, loading };
}