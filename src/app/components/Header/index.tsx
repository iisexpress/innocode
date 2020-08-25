import React from 'react'
import style from './style.css'
import ModalWindow from 'app/components/ModalWindow'

const Header = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

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
    <button className={style.btn_need_consult} onClick={onClick}>
      Бесплатная консультация
    </button>
    { showResults ? <ModalWindow /> : null }
  </div>
  )
}

export default Header
