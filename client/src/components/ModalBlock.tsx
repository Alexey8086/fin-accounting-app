import React, { useEffect, useRef, useState} from 'react'
import { createWallet, updataWallet, deleteOneWallet } from '../http/walletAPI'
import { createProfit, updataProfit, deleteOneProfit } from '../http/profitAPI'
import { createCost, updataCost, deleteOneCost } from '../http/costAPI'

interface IModalProps {
    whichPage: string
    whichModal: string
    userId: string
    walletId: string
    setModal: Function
    setDbChanges: Function
    onClose: Function
    children: React.ReactNode
    profitId: string
}


const ModalBlock = (props: IModalProps) => {

  const [title, setTitle] = useState('')
  const [balance, setBalance] = useState('')
  const [warning, setWarning] = useState('')

  let TITLE: string = ''
  let BTN_TEXT: string = ''
  let BTN_CLASS: string = ''
  let IS_DELETE: boolean = false

  if (props.whichModal === 'add') {
    BTN_CLASS = 'add_btn'

    switch (props.whichPage) {
      case "wallets":
        TITLE = 'Создание кошелька'
        BTN_TEXT = 'Сохранить'
        break
      case "profit":
        TITLE = 'Добавить доход'
        BTN_TEXT = 'Добавить'
        break
      case "cost":
        TITLE = 'Добавить расход'
        BTN_TEXT = 'Добавить'
        break
    }
  }

  if (props.whichModal === 'edit') {
    BTN_CLASS = 'edit_btn'

    switch (props.whichPage) {
      case "wallets":
        TITLE = 'Редактировать кошелёк'
        BTN_TEXT = 'Сохранить'
        break
      case "profit":
        TITLE = 'Редактировать доход'
        BTN_TEXT = 'Сохранить'
        break
      case "cost":
        TITLE = 'Редактировать расход'
        BTN_TEXT = 'Сохранить'
        break
    }
  }

  if (props.whichModal === 'delete') {
    BTN_CLASS = 'delete_btn'
    IS_DELETE = true

    switch (props.whichPage) {
      case "wallets":
        TITLE = 'Удаление кошелька'
        BTN_TEXT = 'Удалить'
        break
      case "profit":
        TITLE = 'Вы действительно хотите удалить доход?'
        BTN_TEXT = 'Удалить'
        break
      case "cost":
        TITLE = 'Вы действительно хотите удалить расход?'
        BTN_TEXT = 'Удалить'
        break
    }
  }


  const onClickHandler = async (action:string, whichPage:string) => {

    if (whichPage=='wallets') {
      if (action == "add") {
        const res:any = await createWallet(props.userId, title, balance)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()

      }

      if (action == "edit") {
        const res: any = await updataWallet(props.walletId, title, balance)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }

      if (action == "delete") {
        const res = await deleteOneWallet(props.walletId)
        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }
    }

    if (whichPage=='profit') {
      if (action == "add") {
        const res:any = await createProfit(props.walletId, title, balance)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()

      }

      if (action == "edit") {
        const res: any = await updataProfit(title, balance, props.profitId)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }

      if (action == "delete") {
        const res = await deleteOneProfit(props.profitId)
        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }
    }

    if (whichPage=='cost') {
      if (action == "add") {
        const res:any = await createCost(props.walletId, title, balance)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()

      }

      if (action == "edit") {
        const res: any = await updataCost(title, balance, props.profitId)

        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }

      if (action == "delete") {
        const res = await deleteOneCost(props.profitId)
        props.setDbChanges(`something changed in DB timestamp: ${Date.now()}`)
        props.onClose()
      }
    }


  }

  return (
    <div className={'modal-block'}>

        <span className={'modal-block__title'}>
            { TITLE }
        </span>
        {
          IS_DELETE ? null :
          <>
              <div className={'modal-block__field'}>
                  <span className={'field-name'}>
                    {
                      props.whichPage==='wallets' ?  'Название кошелька:' :
                      props.whichPage==='profit' ? 'Название дохода:' :
                      'Название расхода:'
                    }
                  </span>
                  <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' name='text' />
              </div>

              <div className={'modal-block__field'}>
                  <span className={'field-name'}>
                    {
                      props.whichPage==='wallets' ?  'Баланс:' :
                      props.whichPage==='profit' ? 'Денежный эквивалент:' :
                      'Денежный эквивалент:'
                    }
                  </span>
                  <input onChange={(e) => setBalance(e.target.value)} value={balance} type='text' name='text' />
              </div>
          </>
        }

        <div id={'modal-block__btn'} className={'modal-block__field'}>
            <button onClick={() => onClickHandler(props.whichModal, props.whichPage)} className={ BTN_CLASS } type='submit'> { BTN_TEXT } </button>
            { warning ? <h1 style={{backgroundColor: '#FDBB09 ', color: 'black'}}></h1> : null }
        </div>

    </div>
  )
}
export default ModalBlock