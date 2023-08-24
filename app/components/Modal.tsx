import { useState } from 'react';
import { useEffect } from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  const [isClient, setIsClient] = useState(false); // State to indicate client-side rendering

  // Make sure this effect only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null during server-side rendering
    return null;
  }

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">{children}</div>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;