import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import '../styles/walletsPG/walletsPG.css'
import plus_icon from '../icons/plus.svg'

const WalletsPG: React.FC = () => {

  const [modal, setModal] = useState('')

  const onClickHandler = (wModal:string):void => {
    setModal(wModal)
  }

  const modalStateHandler = (param:string):void => {
    setModal(param)
  }



  return (
    <>
      <Modal setModalProp={modalStateHandler} whichModal={ modal } whichPage={'wallets'}/>

      <Menu />

      <div className={'grid-container'}>
      <div onClick={ ()=>{ onClickHandler('add') } } id={'grid-container__add-wallet'}>
        <div id={'add-wallet__circle'}>
          <img src={plus_icon} alt='Добавить новый кошелёк' />
        </div>
        <span>Добавить кошелёк</span>
      </div>

      {/* Item */}
      <div className={'grid-container__item'}>
        <div className={'item__title'}>QIWI</div>
        <div className={'item__amount'}>11 576</div>
        <div className={'item__btns'}>
          <button onClick={ ()=>{ onClickHandler('edit') } } className={'btns__edit'}>редактировать</button>
          <button onClick={ ()=>{ onClickHandler('delete')} } className={'btns__delite'}>удалить</button>
        </div>
      </div>
      {/* Item */}

    </div>
    </>
  )
}

export default WalletsPG