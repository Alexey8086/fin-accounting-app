import React, { useEffect, useState, FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import '../styles/walletIdPG/walletIdPG.css'
import { getAllCosts } from '../http/costAPI'
import { getAllProfits } from '../http/profitAPI'
import { PROFIT_PG_ROUTE, COST_PG_ROUTE } from '../utils/consts'
import { reverseArray } from '../utils/reverseArr'

const WalletIdPG: FC = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [costs, setCosts]:any = useState('')
  const [profits, setProfits]:any = useState('')

  useEffect(() => {

    getAllCosts(id)
      .then( ({ data }:any) => {
        if (data?.length > 5) setCosts(reverseArray(data?.slice(0, 5)))
        else setCosts(reverseArray(data))
      } )
      .catch((e) => console.warn(e.response.data?.message))

   }, [])

  useEffect(() => {

    getAllProfits(id)
     .then( ({ data }:any) => {
       if (data?.length > 5) setProfits(reverseArray(data?.slice(0, 5)))
       else setProfits(reverseArray(data))
     } )
     .catch((e) => console.warn(e.response.data?.message))

  }, [])

  const navigateHandler = (url:string) => {
    navigate(url + '/' + id)
  }

  return (
    <>
      <Menu />

      <div className={'wallet-container'}>
        <div className={'wallet-container__profit'}>
          <div className={'profit__title'}>ДОХОДЫ:</div>
          {/* Item */}
            {
              profits?.length ? profits.map((item:any) =>
              <div key={item._id} className={'wallet-item'}> <span> {item.title} </span> <span>{item.money}</span> </div>)
              : <div className={'wallet-item'}> Расходы отсутствуют </div>
            }
          {/* Item */}
          <button onClick={ () => (navigateHandler(PROFIT_PG_ROUTE)) } id={'profite__btn'}>показать всё</button>
        </div>

        <div className={'wallet-container__cost'}>
          <div className={'cost__title'}>РАСХОДЫ:</div>
          {/* Item */}
            {
              costs?.length ? costs.map((item:any) =>
              <div key={item._id} className={'wallet-item'}> <span> {item.title} </span> <span>{item.money}</span> </div>)
              : <div className={'wallet-item'}> Доходы отсутствуют </div>
            }
          {/* Item */}
          <button onClick={ () => (navigateHandler(COST_PG_ROUTE)) } id={'cost__btn'}>показать всё</button>
        </div>
      </div>
    </>
  )
}

export default WalletIdPG