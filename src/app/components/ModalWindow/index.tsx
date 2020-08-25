import React from 'react'
import style from './style.css'

const ModalWindow = () => (
  <div className={style.fullfill}>
    <div className={style.fullfill_shadow}>    
    </div>
    <div className={style.fullfill_content}>
      <div className={style.contactus}> 
        <div className={style.contactus_container}>  
          <h4>Задайте вопрос, и вам ответит<br/> квалифицированный специалист</h4>
          <div className={style.inputs}>
            <input className={style.input} placeholder="Ваш номер телефона"></input>
            <input className={style.input} placeholder="Ваш email"></input>
            <input className={style.input} placeholder="Ваш вопрос"></input>
          </div>
          <button className={style.send_button}>Отправить</button>
        </div>
      </div>
    </div>
  </div>
)

export default ModalWindow
