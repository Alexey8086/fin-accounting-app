import React, { useEffect, useState, useContext, FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import { getAllProfits } from '../http/profitAPI'
import { reverseArray } from '../utils/reverseArr'
import '../styles/profitPG/profitPG.css'

const ProfitPG: React.FC = () => {

  // current wallet id
  const { id }:any = useParams()
  const [modal, setModal] = useState('')
  const [profits, setProfits]: any = useState('')
  const [profitId, setProfitId]: any = useState('')
  const [anyChangesInDB, setDbChanges]: any = useState('')


  useEffect(() => {

    getAllProfits(id)
      .then( ({ data }:any) => {

        setProfits(reverseArray(data))
      } )
      .catch((e) => console.warn(e.response.data?.message))

   }, [anyChangesInDB])

  const onClickHandler = (wModal:string, id?:string):void => {
    let profitId = id ? id : ''
    setProfitId(id)
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
        walletId={id}
        userId={''}
        setDbChanges={setDbChanges}
        profitId={profitId}
      />

      <Menu />

      <div className={'gain-container'}>
        <div className={'profit__title'}>
          <span>ДОХОДЫ:</span>
          <button onClick={ ()=>{ onClickHandler('add') } } id={'add-profit'}> Добавить доход </button>
        </div>

        {/* item */}
            {
              profits.length ? profits.map((item:any) =>
                <div key={item._id}  className={'gain-item-container'}>
                  <div className={'gain-item'}><span> {item.title} </span> <span> {item.money} </span></div>
                  <button onClick={ ()=>{ onClickHandler('edit', item._id) } } className={'gain-item-edit-btn'}>редактировать</button>
                  <button onClick={ ()=>{ onClickHandler('delete', item._id) } } className={'gain-item-delete-btn'}>удалить</button>
                </div>
              ) : <div className={'gain-item-container'}><p style={{color: 'black'}}>Тут пока пусто ... Добавьте что-нибудь</p></div>
            }
        {/* item */}
      </div>
    </>
  )
}

export default ProfitPG