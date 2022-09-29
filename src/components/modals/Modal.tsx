import React from 'react'
import './Modal.scss'
interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}
const Modal = ({ children, onClose }: ModalProps) => {
 
  return (
    <>
      <div className="overlay" onClick={()=>onClose()} />
      <div className="content">{children}</div>
    </>
  )
}
export default Modal
