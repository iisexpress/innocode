import React from 'react'
import style from './style.css'

const Footer = () => (
  <div className={style.footer}>
  <div className={style.footer_logo}>ИННОКОД 2020</div>
  <div className={style.footer_sm}>
    <div className={style.sm_logo}>
      <img src="assets/svg/instagram-sml.svg" />
    </div>
    <div className={style.sm_logo}>
      <img src="assets/svg/facebook-sml.svg" />
    </div>
    <div className={style.sm_logo}>
      <img src="assets/svg/telegram-sml.svg" />
    </div>
    <div className={style.sm_logo}>
      <img src="assets/svg/whatsapp-sml.svg" />
    </div>
  </div>
  <div className={style.footer_navbar}>
    <a href="/contact">IT-услуги</a>
    <a href="/contact">Услуги для стартапов</a>
    <a href="/contact">IT-компаниям</a>
    <a href="/contact">О нас</a>
    <a href="/contact">Контакты</a>
    <a href="/contact">Вакансии</a>    
  </div>
</div>
)

export default Footer
