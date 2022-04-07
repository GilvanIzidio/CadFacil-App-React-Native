import { useContext } from 'react';
import { ModalContext, ModalContextData } from '../context/Modal';

export default function useModal(): ModalContextData {
  const context = useContext(ModalContext);
  return context;
}
