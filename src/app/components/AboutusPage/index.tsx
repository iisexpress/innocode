import React from 'react'
import style from './style.css'

const AboutusPage = () => (
  <div className={style.content}>
    <div className={style.columns}>
      <div className={style.column_left}>
        <div className={style.column_card}>
          <span className={style.header_label}>О нас</span>
          <div className={style.info_label}>
            “ИННОКОД” - компания в Особой <br/> 
            Экономической Зоне “Иннополис”<br/> 
            (Республика Татарстан)
          </div>
        </div>           
        <div className={style.column_card}>
          <img src="assets/svg/undrawclient.svg"></img>
        </div> 
          
      </div>
      <div className={style.column_right} style={{ margin: 'auto'}}>      
        <div className={style.column_card}>     
          <img src="assets/images/IMG_20200801_093600_178.png"></img>
          
        </div>           
        <div className={style.column_card}>
          <span className={style.header_label}>Наша цель</span>
          <div className={style.info_label}>
            Cоздавать продукты и решения, которые<br/>
            позволят нашим клиентам получать<br/>
            конкурентные преимущества<br/>
            человеческого прогресса.
          </div> 
        </div>   
      </div>
    </div>
    <div className={style.news_header}>наши последние новости</div>
    <div className={style.contactus}> 
      <div className={style.contactus_container}>  
        <h2>Остались вопросы?<br/> Напишите нам!</h2>
        <input className={style.input} placeholder="Ваш номер телефона"></input>
        <input className={style.input} placeholder="Ваш email"></input>
        <input className={style.input} placeholder="Ваш вопрос"></input>
        <button className={style.send_button}>Отправить</button>
      </div>
    </div>
  </div>
)

export default AboutusPage
