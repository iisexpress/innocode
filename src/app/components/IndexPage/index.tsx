import React from 'react'
import style from './style.css'

const IndexPage = () => (
  <div className={style.content}>
  <div className={style.content_container}>
    <div className={style.content_logo}>
      <img src="../../../assets/images/INNOCOD_LOGO.png" />
    </div>
    <div className={style.content_sm}>
      <div className={style.sm_logo + " instagram-bg"}>
        <a href="" >
          <img src="assets/svg/instagram-bg.svg" />
        </a>
      </div>
      <div className={style.sm_logo + " facebook-bg"}>
        <a href="" >
          <img src="assets/svg/facebook-bg.svg" />
        </a>
      </div>
      <div className={style.sm_logo + " telegram-bg"}>
        <a href="https://t.me/AbdullinaElena" >
          <img src="assets/svg/telegram-bg.svg" />
        </a>
      </div>
      <div className={style.sm_logo + " whatsapp-bg"}>
        <a href="https://wa.me/+79027111175">
          <img src="assets/svg/whatsapp-bg.svg" />
        </a>
      </div>
    </div>
  </div>
</div>
)

export default IndexPage
