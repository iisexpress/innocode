import React from 'react'
import style from './style.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const ContactPage = () => (
  <div className={style.content}>
    <div className={style.columns}>
      <div className={style.column_left}>
          <span className={style.header_label}>Контакты</span>
          <div className={style.sm_line}>
            <div className={style.sm_logo}>
              <img src="assets/svg/instagram-sml-black.svg" />
            </div>
            <div className={style.sm_logo}>
              <img src="assets/svg/facebook-sml-black.svg" />
            </div>
            <div className={style.sm_logo}>
              <img src="assets/svg/telegram-sml-black.svg" />
            </div>
            <div className={style.sm_logo}>
              <img src="assets/svg/whatsapp-sml-black.svg" />
            </div>
          </div>
          <span className={style.info_label}>info@innocode.ru</span>
          <span className={style.info_label}>+7(843)251-00-85</span>
          <span className={style.info_label}>Республика Татарстан,</span>
          <span className={style.info_label}>Верхнеуслонский р-н,</span>
          <span className={style.info_label}>г. Иннополис, ул. Университетская 7</span>
      </div>
      <div className={style.column_right}>           
          <span className={style.header_label}>Напишите нам</span>
          <input className={style.input} placeholder="Напишите нам"></input>
          <input className={style.input} placeholder="Ваш email"></input>
          <input className={style.input} placeholder="Ваш вопрос"></input>
          <button className={style.send_button}>Отправить</button>
      </div>
    </div>
    <div className={style.map}>
    <YMaps>
      <div>
      <Map defaultState={{ center: [55.751872, 48.752936], zoom: 16 }} style={{width: '100%', height: '300px'}} >
      <Placemark geometry={[55.751872, 48.752936]} />
      </Map>
      </div>
    </YMaps>
    </div>
</div>
)

export default ContactPage
