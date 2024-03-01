import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../context/Modal';

function OpenAddCommentModal({
    modalComponent, // component to render inside the modal
    onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
    onModalClose, // optional: callback function that will be called once the modal is closed

    closeMenu,

    className,
    productId,
    commentInfo,
    type
}) {
    const { setModalContent, setOnModalClose } = useModal();
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    return (
        <div className="add-comment-modal-container">
            Hello
        </div>
    );
}

export default OpenAddCommentModal;
