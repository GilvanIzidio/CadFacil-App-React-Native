import React, { createContext, useCallback, useState } from 'react';
import Modal from '../../components/molecules/Modal';

export type ModalData = {
  message: string | string[];
  type: 'success' | 'danger';
};

export type ModalContextData = {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
  isVisible: boolean;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export default function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState({} as ModalData);

  const openModal = useCallback(({ type, message }: ModalData) => {
    setModal({
      message,
      type,
    });
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => setVisible(false), []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isVisible: visible }}>
      {children}
      {visible && (
        <Modal type={modal.type} close={closeModal} message={modal.message} show={visible} />
      )}
    </ModalContext.Provider>
  );
}
