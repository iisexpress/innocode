import React from 'react'
import style from './style.css'

const WorkAtUsPage = () => (
  <div className={style.content}>
    <div className={style.columns}>
      <div className={style.column_left}>
          <span className={style.header_label}>Работа у Нас</span>
          <span className={style.info_label}>Пришлите свое резюме,</span>
          <span className={style.info_label}>мы свяжемся с Вами!</span>
          <input className={style.input} placeholder="Ваш email"></input>
          <button className={style.send_button}>Загрузить резюме</button>
      </div>
      <div className={style.column_right}>           
            <img src="assets/svg/workatus.svg" />
      </div>
    </div>
</div>
)

export default WorkAtUsPage
