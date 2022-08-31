import React, { useEffect, useState, useContext, FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { observer } from "mobx-react-lite"
import '../styles/costPG/costPG.css'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import { getAllCosts } from '../http/costAPI'

const CostPG: FC = observer(() => {

  // current wallet id
  const { id }:any = useParams()
  const [modal, setModal] = useState('')
  const [anyChangesInDB, setDbChanges]: any = useState('')
  const [profitId, setProfitId]: any = useState('')
  const [costs, setCosts]: any = useState('')
  const { user }:any = useContext(Context)
  const userId:string = user.getUser?.id


  useEffect(() => {

    getAllCosts(id)
      .then( ({ data }:any) => {
        console.log('DATA ---->>>', data)
        setCosts(data)
      } )
      .catch((e) => console.warn(e.response.data?.message))

   }, [anyChangesInDB])


  const onClickHandler = (wModal:string, pid?:string):void => {
    let profitId = pid ? pid : ''
    setProfitId(profitId)
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
        userId={userId}
        walletId={id}
        setDbChanges={setDbChanges}
        profitId={profitId}
      />

      <Menu />

      <div className={'cost-container'}>
        <div className={'cost__title'}>
          <span>РАСХОДЫ:</span>
          <button onClick={ ()=>{ onClickHandler('add') } } id={'add-cost'}> Добавить расход </button> </div>

        {/* item */}
          {
            costs.length ? costs.reverse().map((item:any) =>
              <div key={item._id}  className={'cost-item-container'}>
                <div className={'cost-item'}><span> {item.title} </span> <span> {item.money} </span></div>
                <button onClick={ ()=>{ onClickHandler('edit', item._id) } } className={'cost-item-edit-btn'}>редактировать</button>
                <button onClick={ ()=>{ onClickHandler('delete', item._id) } } className={'cost-item-delete-btn'}>удалить</button>
              </div>
            ) : <div className={'gain-item-container'}><p style={{color: 'black'}}>Тут пока пусто ... Добавьте что-нибудь</p></div>
          }
        {/* item */}
      </div>
    </>
  )
})

export default CostPG