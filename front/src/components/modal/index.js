import React from 'react';
import './commonModal.css';

function CommonModal({isOpen}) {
    if(!isOpen) return null;

    if(isOpen) return (
        <div className="commonModalWrapper">CommonModal
            <aside></aside>
        </div>
    );
}
export default CommonModal;