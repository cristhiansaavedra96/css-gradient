import React from 'react';
import { useDispatch } from 'react-redux';

const Templates = () => {

    const dispatch = useDispatch();
    const handleClick = (e) => {
        let type = "";
        if (e.target.id === "save") {
            type = "@changeShowSaveModal";
        } else {
            type = "@changeShowLoadModal";
        }
        dispatch({
            type: type
        })
    }

    return (
        <section>
            <h2>Templates</h2>
            <div>
                <input
                    type="button"
                    value="Save"
                    id="save"
                    onClick={(e) => handleClick(e)}
                />
                <input
                    type="button"
                    value="Load"
                    id="load"
                    onClick={(e) => handleClick(e)}
                />
            </div>
        </section>
    );
};

export default Templates;
