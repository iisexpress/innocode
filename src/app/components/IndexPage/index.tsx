import React from 'react'
import style from './style.css'

const IndexPage = () => (
  <div className={style.content}>
  <div className={style.content_container}>
    <div className={style.content_logo}>
      <img src="INNOCOD_LOGO.png" />
    </div>
    <div className={style.content_sm}>
      <div className={style.sm_logo + " instagram-bg"}>
        <img src="assets/svg/instagram-bg.svg" />
      </div>
      <div className={style.sm_logo + " facebook-bg"}>
        <img src="assets/svg/facebook-bg.svg" />
      </div>
      <div className={style.sm_logo + " telegram-bg"}>
        <img src="assets/svg/telegram-bg.svg" />
      </div>
      <div className={style.sm_logo + " whatsapp-bg"}>
        <img src="assets/svg/whatsapp-bg.svg" />
      </div>
    </div>
  </div>
</div>
)

export default IndexPage
