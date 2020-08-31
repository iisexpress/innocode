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
          <label htmlFor="file-upload" className={style.upload_button}> 
            <div className={style.upload_button_container}>
              <img src="assets/svg/upload.svg" />
              <span>Загрузить резюме</span>
            </div>
          </label>
          <input className={style.input_file} id="file-upload" type="file" required/>         
          <button className={style.send_button}>Отправить резюме</button>
      </div>
      <div className={style.column_right}>           
            <img src="assets/svg/workatus.svg" />
      </div>
    </div>
</div>
)

export default WorkAtUsPage
