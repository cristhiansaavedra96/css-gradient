import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeActivePage } from "../reducers/pageReducer";
import { linearSections, radialSections, textSections } from "../components/Gradients/TypeGradient/sectionData";

export const useTypeGradient = (type) => {

    const [sectionsToUse, setSectionsToUse] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeActivePage('type-gradients'));
        switch (type) {
            case 'linear': setSectionsToUse(linearSections);
                break;
            case 'radial': setSectionsToUse(radialSections);
                break;
            case 'text': setSectionsToUse(textSections);
                break;
            default: setSectionsToUse([]);
        }
    }, [type, dispatch]);

    return sectionsToUse;
}