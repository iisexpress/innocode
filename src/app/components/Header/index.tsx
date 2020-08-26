import React from 'react'
import style from './style.css'
import modal_style from './modal_style.css'

const Header = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onShowClick = () => setShowResults(true)
  const onHideClick = () => setShowResults(false)

  return (
    <div className={style.navbar}>
    <a href="/">
    <div className={style.logo_navbar}>
        <img src="../../../assets/images/INNOCOD_LOGO_condensed.png" />
    </div>
    </a>
    <a href="/itservices">IT-услуги</a>
    <a href="/forstartups">Услуги для стартапов</a>
    <a href="/foritcompanies">IT-компаниям</a>
    <div className={style.dropdown}>
      <button className={style.dropbtn}>О компании
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={style.dropdown_content} id="myDropdown">
        <a href="/aboutus">О нас</a>
        <a href="/contact">Контакты</a>
        <a href="/vacancies">Вакансии</a>
      </div>
    </div>
    <div className={style.rect}></div>
    <button className={style.btn_need_consult} onClick={onShowClick}>
      Бесплатная консультация
    </button>
    { showResults ? 
      <div className={modal_style.fullfill}>
      <div className={modal_style.fullfill_shadow}>    
      </div>
      <div className={modal_style.fullfill_content}>
        <div className={modal_style.contactus}> 
          <div className={modal_style.closeButton_container}>
            <div className={modal_style.closeButton} onClick={onHideClick}>X</div>
          </div>
          <div className={modal_style.contactus_container}>  
            <h4>Задайте вопрос, и вам ответит<br/> квалифицированный специалист</h4>
            <div className={modal_style.inputs}>
              <input className={modal_style.input} placeholder="Ваш номер телефона"></input>
              <input className={modal_style.input} placeholder="Ваш email"></input>
              <input className={modal_style.input} placeholder="Ваш вопрос"></input>
            </div>
            <button className={modal_style.send_button}>Отправить</button>
          </div>
        </div>
      </div>
    </div>     
    : null }
  </div>
  )
}

export default Header
