import React, { useEffect, useState, useContext, useRef, FC } from 'react'
import { Context } from '../index'
import { observer } from "mobx-react-lite"
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import '../styles/walletsPG/walletsPG.css'
import plus_icon from '../icons/plus.svg'
import { getAllWallets } from '../http/walletAPI'
import Wallet from '../components/Wallet'

export interface IWallet {
  _id: string
  userId: string
  title: string
  balance: number
  __v: number
}

const WalletsPG: FC = observer(() => {

  const [modal, setModal] = useState('')
  const [wallets, setWallets]:any = useState('')
  const [walletId, setWalletId]:any = useState('')
  const [anyChangesInDB, setDbChanges]: any = useState('')

  const { user }:any = useContext(Context)
  const userId:string = user.getUser?.id

  const onClickHandler = (wModal:string, id?: string):void => {
    setModal(wModal)
    setWalletId(id)
  }

  const modalStateHandler = (param:string):void => {
    setModal(param)
  }

  useEffect(() => {

    getAllWallets(userId)
      .then( ({ data }:any) => {
        setWallets(data)
      } )
      .catch((e) => console.warn(e.response.data?.message))

   }, [anyChangesInDB])


  return (
    <>
      <Modal walletId={walletId} setModalProp={modalStateHandler} setDbChanges={setDbChanges} userId={userId} whichModal={ modal } whichPage={'wallets'} profitId={''}/>

      <Menu />

      <div className={'grid-container'}>
      <div onClick={ ()=>{ onClickHandler('add') } } id={'grid-container__add-wallet'}>
        <div id={'add-wallet__circle'}>
          <img src={plus_icon} alt='Добавить новый кошелёк' />
        </div>
        <span>Добавить кошелёк</span>
      </div>

      {/* Item */}
        { wallets?.length ? wallets.map((item:any) => <Wallet setWalletId={setWalletId} onClickHandler={onClickHandler} title={item.title} balance={item.balance} key={item._id} id={item._id}/> ) : null }
      {/* Item */}

    </div>
    </>
  )
})

export default WalletsPG