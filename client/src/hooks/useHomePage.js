import { changeActivePage } from "../reducers/pageReducer";
import { useDispatch } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import { changeFirstColor, changeSecondColor, changeStyle, changeDirection, changeTemplate } from "../reducers/gradientReducer";
import { useEffect } from "react";
import { getTemplate } from "../services/templates";

const useHomePage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const parseColorFromText = (color) => {
        return `#${color.toUpperCase()}`;
    }

    const { templateName } = useParams();

    useEffect(() => {
        dispatch(changeActivePage('home'));
        if (searchParams.get('c1')) dispatch(changeFirstColor(parseColorFromText(searchParams.get('c1'))));
        if (searchParams.get('c2')) dispatch(changeSecondColor(parseColorFromText(searchParams.get('c2'))));
        if (searchParams.get('gt')) dispatch(changeStyle(searchParams.get('gt')));
        if (searchParams.get('gd')) dispatch(changeDirection(searchParams.get('gd')));
        if (templateName) {
            getTemplate(templateName).then(template => dispatch(changeTemplate(template)));
        };
    }, [dispatch, searchParams, templateName]);
};

export default useHomePage;
