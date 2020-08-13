import React from 'react'
import style from './style.css'

const Footer = () => (
  <div className="footer">
  <div className="footer-logo">ИННОКОД 2020</div>
  <div className="footer-sm">
    <div className="sm-logo instagram-sml">
      <img src="assets/svg/instagram-sml.svg" />
    </div>
    <div className="sm-logo facebook-sml">
      <img src="assets/svg/facebook-sml.svg" />
    </div>
    <div className="sm-logo telegram-sml">
      <img src="assets/svg/telegram-sml.svg" />
    </div>
    <div className={style.sm_logo + " whatsapp-sml"}>
      <img src="assets/svg/whatsapp-sml.svg" />
    </div>
  </div>
</div>
)

export default Footer
