import React from 'react'
import style from './style.css'

const Footer = () => (
  <div className={style.footer}>
  <div className={style.footer_logo}>ИННОКОД 2020</div>
  <div className={style.footer_sm}>
    <div className={style.sm_logo}>
      <a href="" >
        <img src="assets/svg/instagram-sml.svg" />
      </a>
    </div>
    <div className={style.sm_logo}>
      <a href="" >
        <img src="assets/svg/facebook-sml.svg" />
      </a>
    </div>
    <div className={style.sm_logo}>
      <a href="https://t.me/AbdullinaElena" >
        <img src="assets/svg/telegram-sml.svg" />
      </a>
    </div>
    <div className={style.sm_logo}>
      <a href="https://wa.me/+79027111175">
        <img src="assets/svg/whatsapp-sml.svg" />
      </a>
    </div>
  </div>
  <div className={style.footer_navbar}>
    <a href="/itservices">IT-услуги</a>
    <a href="/forstartups">Услуги для стартапов</a>
    <a href="/foritcompanies">IT-компаниям</a>
    <a href="/aboutus">О нас</a>
    <a href="/contact">Контакты</a>
    <a href="/contact">Вакансии</a>    
  </div>
</div>
)

export default Footer
