import React from 'react'
import style from './style.css'

const AboutusPage = () => (
  <div className={style.content}>
    <div className={style.columns}>
      <div className={style.column_left}>
          <span className={style.header_label}>О нас</span>
          <div className={style.info_label}>“ИННОКОД” - компания в Особой  Экономической Зоне “Иннополис” (Республика Татарстан)</div>
      </div>
      <div className={style.column_right}>           
          <img src="assets/images/IMG_20200801_093600_178.png"></img>
      </div>
    </div>
    <div className={style.columns}>
      <div className={style.column_left}>
          <img src="assets/svg/undrawclient.svg"></img>
      </div>
      <div className={style.column_right}>      
        <span className={style.header_label}>Наша цель</span>
        <div className={style.info_label}>оздавать продукты и решения, которые позволят нашим клиентам получать конкурентные преимущества человеческого прогресса. </div>          
      </div>
    </div>
    <div className={style.news_header}>наши последние новости</div>
  </div>
)

export default AboutusPage
