import React from 'react'
import modal_style from './modal_style.css'

const ModalWindow = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onHideClick = () => setShowResults(false)
  
  return(
    showResults ? 
      <div className={modal_style.fullfill}>
        <div className={modal_style.fullfill_shadow}>    
        </div>
        <div className={modal_style.fullfill_content}>
          <div className={modal_style.contactus}> 
            <div className={modal_style.contactus_container}>  
              <h4>Задайте вопрос, и вам ответит<br/> квалифицированный специалист</h4>
              <div className={modal_style.inputs}>
                <input className={modal_style.input} placeholder="Ваш номер телефона"></input>
                <input className={modal_style.input} placeholder="Ваш email"></input>
                <input className={modal_style.input} placeholder="Ваш вопрос"></input>
              </div>
              <button className={modal_style.send_button} onClick={onHideClick}>Отправить</button>
            </div>
          </div>
        </div>
      </div> 
      : <div></div>
  )
}

export default ModalWindow
