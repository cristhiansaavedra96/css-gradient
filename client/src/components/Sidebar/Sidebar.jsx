import './Sidebar.css';
import Style from './Style';
import OutputFormat from './OutputFormat';
import Direction from './Direction';
import ColorPicker from './ColorPicker';
import ThemeSelector from './ThemeSelector';
import ExportButtons from './ExportButtons';
import Templates from './Templates';
import ColorButtons from './ColorButtons';
import GradientButtons from './GradientButtons';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const theme = useSelector(state => state.themeReducer);
    const actualPage = useSelector(state => state.pageReducer);
    const isOnHome = actualPage === 'home';

    return (
        <div className={`sidebar sidebar__${theme}`}>
            <h1>CSS GRADIENT GENERATOR</h1>
            <ThemeSelector />
            {isOnHome ?
                <div>
                    <Style />
                    <Direction />
                    <ColorPicker />
                    <OutputFormat />
                    <ExportButtons />
                    <Templates />
                </div> :
                <div>
                    <GradientButtons />
                    <ColorButtons /> 
                </div>}
        </div>
    );
};

export default Sidebar;
