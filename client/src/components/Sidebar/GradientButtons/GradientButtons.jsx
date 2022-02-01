import { useNavigate } from "react-router-dom";

const GradientButtons = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/${e.currentTarget.id}-gradients`, { replace: true });
    }

    return (
        <section>
            <h2>Discover by Type</h2>
            <div>
                <input
                    type="button"
                    value="Linear"
                    id="linear"
                    onClick={(e) => handleClick(e)} />
                <input
                    type="button"
                    value="Radial"
                    id="radial"
                    onClick={(e) => handleClick(e)} />
                <input
                    type="button"
                    value="Text"
                    id="text"
                    onClick={(e) => handleClick(e)} />
            </div>
        </section>
    );
};

export default GradientButtons;