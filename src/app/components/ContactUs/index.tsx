import React from 'react'
import style from './style.css'

const ContactUs = () => (
  <div className={style.contactus}>
    <div className={style.columns}>
        <div className={style.column_left}>           
            <h2>оставьте заявку <br/>на консультацию</h2>
            <input className={style.input} placeholder="Ваш номер телефона"></input>
            <input className={style.input} placeholder="Ваш email"></input>
            <input className={style.input} placeholder="Ваш вопрос"></input>
            <button className={style.send_button}>Отправить</button>
        </div>
        <div className={style.column_right}>
            
        <img src="assets/svg/undrawmobilemessage.svg" />
        </div>
      </div>
  </div>
)

export default ContactUs
