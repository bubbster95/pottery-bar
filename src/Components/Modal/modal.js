import React from 'react';

import './modal.scss';

// Return modal box, close button, overlay that is used to close the modal as well
const Modal = ({ toggleModal, show, children}) => show && 
    <div className='modal'>
        <button onClick={toggleModal} className='close-modal'>X</button>
        {children}
        <div className='modal-overlay' onClick={toggleModal}/>
    </div>;

export default Modal;
