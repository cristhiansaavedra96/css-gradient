import React from 'react';
import HomeGradient from '../HomeGradient';
import Information from '../Information';
import { useSelector } from 'react-redux';
import LoadModal from '../Sidebar/Templates/LoadModal';
import SaveModal from '../Sidebar/Templates/SaveModal';
import useHomePage from '../../hooks/useHomePage';

const HomePage = () => {
    const { showSaveModal, showLoadModal } = useSelector(state => state.modalReducer);
    useHomePage();

    return (
        <div>
            <HomeGradient />
            <Information />
            {showSaveModal ? <SaveModal /> : null}
            {showLoadModal ? <LoadModal /> : null}
        </div>
    );
};

export default HomePage;
