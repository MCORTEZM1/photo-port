import React from 'react';

// pass in currentPhoto from PhotoList as prop to access data and photo
function Modal({ onClose, currentPhoto }) {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current Category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
