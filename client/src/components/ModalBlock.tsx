import React from 'react'


interface IModalProps {
    whichModal: string
    setModal: Function
    children: React.ReactNode
}

function ModalBlock(props: IModalProps) {

  let TITLE
  let BTN_CLASS
  let BTN_TEXT
  let IS_DELETE = false

  if (props.whichModal === 'add') {
    TITLE = 'Добавить новый кошелёк'
    BTN_CLASS = 'add_btn'
    BTN_TEXT = 'добавить'
  }

  if (props.whichModal === 'edit') {
    TITLE = 'Редактировать кошелёк'
    BTN_CLASS = 'edit_btn'
    BTN_TEXT = 'сохранить'
  }

  if (props.whichModal === 'delete') {
    TITLE = 'Удалить кошелёк'
    BTN_CLASS = 'delete_btn'
    BTN_TEXT = 'удалить'
    IS_DELETE = true
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
                  <span className={'field-name'}>название кошелька:</span>
                  <input type='email' name='email' />
              </div>

              <div className={'modal-block__field'}>
                  <span className={'field-name'}>баланс:</span>
                  <input type='email' name='email' />
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