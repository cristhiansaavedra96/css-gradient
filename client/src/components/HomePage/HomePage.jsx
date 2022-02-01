import React from 'react';
import { useSelector } from 'react-redux';
import HomeGradient from './HomeGradient';
import Information from './Information';
import LoadModal from './LoadModal/LoadModal';
import SaveModal from './SaveModal/SaveModal';
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
