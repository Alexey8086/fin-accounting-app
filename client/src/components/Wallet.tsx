import React, { useContext, FC, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/wallet/wallet.css'
import { WALLET_PG_ROUTE } from '../utils/consts'

interface IWalletProps {
    title: string | any
    id: string
    balance: string | any
    onClickHandler: Function
    setWalletId: Function
}



const Wallet = ({title, balance, onClickHandler, setWalletId, id}:IWalletProps) => {

  const navigate = useNavigate()

  const navigateHandler = (navigate:Function) => {
    navigate(`${WALLET_PG_ROUTE}/${id}`)
  }


  return (

    <div className={'grid-container__item'}>
    <div onClick={ ()=>navigateHandler(navigate) } className={'item__title'}> {title} </div>
    <div onClick={ ()=>navigateHandler(navigate) } className={'item__amount'}>{balance}</div>
    <div className={'item__btns'}>
      <button onClick={ ()=>{ onClickHandler('edit', id) } } className={'btns__edit'}>редактировать</button>
      <button onClick={ ()=>{ onClickHandler('delete', id)} } className={'btns__delite'}>удалить</button>
    </div>
  </div>

  )
}

export default Wallet