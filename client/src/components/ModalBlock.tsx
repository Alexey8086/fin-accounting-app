import React from 'react'


interface IModalProps {
    whichPage: string
    whichModal: string
    setModal: Function
    children: React.ReactNode
}

function ModalBlock(props: IModalProps) {

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
                  <input type='text' name='text' />
              </div>

              <div className={'modal-block__field'}>
                  <span className={'field-name'}>
                    {
                      props.whichPage==='wallets' ?  'Баланс:' :
                      props.whichPage==='profit' ? 'Денежный эквивалент:' :
                      'Денежный эквивалент:'
                    }
                  </span>
                  <input type='text' name='text' />
              </div>
          </>
        }

        <div id={'modal-block__btn'} className={'modal-block__field'}>
            <button className={ BTN_CLASS } type='submit'> { BTN_TEXT } </button>
        </div>

    </div>
  )
}
export default ModalBlock