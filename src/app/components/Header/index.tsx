import React from 'react'
import style from './style.css'
import modal_style from './modal_style.css'

const Header = () => {
  const [showResults, setShowResults] = React.useState(false)
  const [showMailSended, setShowMailSended] = React.useState(false)
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [text, setText] = React.useState('')
  
  const onShowClick = () => { 
    setShowMailSended(false);
    setShowResults(true);
  }
  const onHideClick = () => { 
    setEmail(''); 
    setPhone('');
    setText('');
    setShowResults(false)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: phone, email: email, text: text })
    };
    fetch('/api/mail/send', requestOptions)
        .then(response => response.json())
        .then(data => {
          setShowMailSended(true);
          setTimeout(onHideClick,2000);
        });
  }

  const onPhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  }
  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }
  const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }

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
      <div className={style.dropbtn}>О компании
        <i className="fa fa-caret-down"></i>
      </div>
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
            <div className={modal_style.closeButton} onClick={onHideClick}><img src="assets/svg/close-btn.svg" height="16px" width="16px" className={modal_style.close_btn}/></div>
          </div>
          <div className={modal_style.contactus_container}>  
            { showMailSended ? 
              <div><h4>Ваше сообщение направлено,</h4><h4> вам ответит специалист "Иннокода"</h4></div> :
              <form onSubmit={onSubmit}>
                <h4>Задайте вопрос, и вам ответит<br/> квалифицированный специалист</h4>
                <div className={modal_style.inputs}>
                  <input className={modal_style.input} value={phone} pattern="^(((\+[\d]{2,2})|\+\([\d]{2,2}\))|[0])?[0-9]+$" required title="+79998887766" onChange={onPhoneChange} name="phone" placeholder="Ваш номер телефона"></input>
                  <input className={modal_style.input} value={email} type="email" required title="my@mail.com" onChange={onEmailChange} name="email" placeholder="Ваш email"></input>
                  <input className={modal_style.input} value={text} onChange={onTextChange} required name="text" placeholder="Ваш вопрос"></input>
                </div>
                <button className={modal_style.send_button}>Отправить</button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>     
    : null }
  </div>
  )
}

export default Header
