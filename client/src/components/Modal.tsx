import React, { useEffect, useRef, useState, FC } from 'react'
import '../styles/modal/modal.css'
import ModalBlock from './ModalBlock'

interface IModalProps {
  whichModal: string
  setModalProp: Function
}

const Modal = ({setModalProp, whichModal}:IModalProps) => {

  const $container= useRef<HTMLDivElement>(null)

  // закрывает модальное окно и сбрасывает стейт родительского компонента
  const close = () => {
    if (null !== $container.current) {
      $container.current.style.display = 'none'
      setModalProp('')
    }
  }

  // если в пропсах что-то есть, показываем модальное окно
  if (whichModal) {
    if (null !== $container.current) {
      console.log('$$$$$$$$ --> ', $container.current.style.display)
      $container.current.style.display = 'block'
    }
  }

  return (
    <div className='modal-container' ref={$container}>
        <div onClick={close} className={'modal-offset'}></div>
        <ModalBlock
          whichModal={ whichModal }
          setModal={ setModalProp }
        >

        </ModalBlock>
    </div>
  )
}

export default Modal