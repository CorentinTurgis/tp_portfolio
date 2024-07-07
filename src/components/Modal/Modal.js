// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-xl">
        <button onClick={onClose} className="absolute top-3 right-3 text-lg font-semibold">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
