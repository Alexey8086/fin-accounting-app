import React, { useState } from 'react'
import '../styles/costPG/costPG.css'
import Menu from '../components/Menu'
import Modal from '../components/Modal'

const CostPG: React.FC = () => {
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
        whichPage={'cost'}
      />

      <Menu />

      <div className={'cost-container'}>
        <div className={'cost__title'}>
          <span>РАСХОДЫ:</span>
          <button onClick={ ()=>{ onClickHandler('add') } } id={'add-cost'}> Добавить расход </button> </div>

        <div className={'cost-item-container'}>
          <div className={'cost-item'}><span>Lorem ipsum dolor sit</span> <span>15 000</span></div>
          <button onClick={ ()=>{ onClickHandler('edit') } } className={'cost-item-edit-btn'}>редактировать</button>
          <button onClick={ ()=>{ onClickHandler('delete') } } className={'cost-item-delete-btn'}>удалить</button>
        </div>
      </div>
    </>
  )
}

export default CostPG