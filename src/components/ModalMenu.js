import React from 'react';
import { useModal } from '../context/Modal';

export function ModalMenu({
  modalComponent, // component to render inside the modal
  onModalClose, // optional: callback function that will be called once the modal is closed

  className
}) {
  const { setModalContent, setOnModalClose } = useModal();

  return (
    <div>Hello Menu Modal</div>
  );
}
