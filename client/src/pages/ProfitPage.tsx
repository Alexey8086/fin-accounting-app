import React, { useState } from 'react'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import '../styles/profitPG/profitPG.css'

const ProfitPG: React.FC = () => {

  const [modal, setModal] = useState('')

  const onClickHandler = (wModal:string):void => {
    setModal(wModal)
  }

  const modalStateHandler = (param:string):void => {
    setModal(param)
  }

  return (
    <>
      <Modal
        setModalProp={modalStateHandler}
        whichModal={ modal }
        whichPage={'profit'}
      />

      <Menu />

      <div className={'gain-container'}>
        <div className={'profit__title'}>
          <span>ДОХОДЫ:</span>
          <button onClick={ ()=>{ onClickHandler('add') } } id={'add-profit'}> Добавить доход </button> </div>

        <div className={'gain-item-container'}>
          <div className={'gain-item'}><span>Lorem ipsum dolor sit</span> <span>15 000</span></div>
          <button onClick={ ()=>{ onClickHandler('edit') } } className={'gain-item-edit-btn'}>редактировать</button>
          <button onClick={ ()=>{ onClickHandler('delete') } } className={'gain-item-delete-btn'}>удалить</button>
        </div>
      </div>
    </>
  )
}

export default ProfitPG