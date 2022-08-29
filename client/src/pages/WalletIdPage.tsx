import React from 'react'
import Menu from '../components/Menu'
import '../styles/walletIdPG/walletIdPG.css'

const walletIdPG: React.FC = () => {
  return (
    <>
      <Menu />

      <div className={'wallet-container'}>
        <div className={'wallet-container__profit'}>
          <div className={'profit__title'}>ДОХОДЫ:</div>

          <div className={'wallet-item'}> <span>Lorem ipsum dolor sit</span> <span>15 000</span> </div>

          <button id={'profite__btn'}>показать всё</button>
        </div>

        <div className={'wallet-container__cost'}>
          <div className={'cost__title'}>РАСХОДЫ:</div>

          <div className={'wallet-item'}> <span>Lorem ipsum dolor sit</span> <span>15 000</span> </div>

          <button id={'cost__btn'}>показать всё</button>
        </div>
      </div>
    </>
  )
}

export default walletIdPG