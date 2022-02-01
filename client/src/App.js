import './App.css';
import Sidebar from './components/Sidebar';
import React from 'react';
import HomePage from './components/HomePage';
import TypeGradient from './components/Gradients/TypeGradient';
import ColorGradient from './components/Gradients/ColorGradient';
import { useSelector } from 'react-redux';
import {
    Routes,
    Route
} from 'react-router-dom';

function App() {
    const theme = useSelector(state => state.themeReducer);

    return (
        <div className={`content__app content__app__${theme}`}>
            <div className="content__left">
                <Sidebar />
            </div>
            <div className="content__right">
                <Routes>
                    {/* Gradiant type pages */}
                    <Route path="/linear-gradients" element={<TypeGradient type={'linear'} />} />
                    <Route path="/radial-gradients" element={<TypeGradient type={'radial'} />} />
                    <Route path="/text-gradients" element={<TypeGradient type={'text'} />} />

                    {/* Gradiant color pages */}
                    <Route path="/red-gradient-backgrounds" element={<ColorGradient color={'red'} />} />
                    <Route path="/blue-gradient-backgrounds" element={<ColorGradient color={'blue'} />} />
                    <Route path="/orange-gradient-backgrounds" element={<ColorGradient color={'orange'} />} />
                    <Route path="/yellow-gradient-backgrounds" element={<ColorGradient color={'yellow'} />} />
                    <Route path="/monochrome-gradient-backgrounds" element={<ColorGradient color={'monochrome'} />} />
                    <Route path="/azure-gradient-backgrounds" element={<ColorGradient color={'azure'} />} />
                    <Route path="/pink-gradient-backgrounds" element={<ColorGradient color={'pink'} />} />
                    <Route path="/purple-gradient-backgrounds" element={<ColorGradient color={'purple'} />} />
                    <Route path="/green-gradient-backgrounds" element={<ColorGradient color={'green'} />} />

                    {/* Homepage with colors param */}
                    <Route path="c1" element={<HomePage />} />

                    {/* Homepage with template*/}
                    <Route exact path="template/:templateName" element={<HomePage />} />

                    {/* Homepage */}
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
