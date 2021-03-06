import React from 'react'
import style from './style.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const ContactPage = () => {
  const [showMailSended, setShowMailSended] = React.useState(false)
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [text, setText] = React.useState('')
  
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
  return(
    <div className={style.content}>
      <div className={style.columns}>
        <div className={style.column_left}>
            <span className={style.header_label}>Контакты</span>
            <div className={style.sm_line}>
              <div className={style.sm_logo}>
                <a href="">
                  <img src="assets/svg/instagram-sml-black.svg" />
                </a>
              </div>
              <div className={style.sm_logo}>
                <a href="">
                  <img src="assets/svg/facebook-sml-black.svg" />
                </a>
              </div>
              <div className={style.sm_logo}>
                <a href="https://t.me/AbdullinaElena" >
                  <img src="assets/svg/telegram-sml-black.svg" />
                </a>
              </div>
              <div className={style.sm_logo}>
                <a href="https://wa.me/+79027111175">
                  <img src="assets/svg/whatsapp-sml-black.svg" />
                </a>
              </div>
            </div>
            <span className={style.info_label}>vopros@innocode.online</span>
            <span className={style.info_label}>8 800 550-39-77</span>
            <span className={style.info_label}>Республика Татарстан,<br/>Верхнеуслонский р-н,<br/>г. Иннополис, ул. Университетская 7</span>
        </div>
        { showMailSended ? 
            <div className={style.column_right}><h2>Ваше сообщение направлено,</h2><h2> вам ответит специалист "Иннокода"</h2></div> :
            <div className={style.column_right}>      
              <form onSubmit={onSubmit}>           
              <span className={style.header_label}>Напишите нам</span>
              <input className={style.input} value={phone} onChange={onPhoneChange} pattern="^(((\+[\d]{2,2})|\+\([\d]{2,2}\))|[0])?[0-9]+$" required title="+79998887766" name="phone" autoComplete="off" placeholder="Ваш номер телефона"></input>
              <input className={style.input} value={email} type="email" required title="my@mail.com" onChange={onEmailChange} name="email" autoComplete="off" placeholder="Ваш email"></input>
              <input className={style.input} value={text} onChange={onTextChange} required name="text" autoComplete="off" placeholder="Ваш вопрос"></input>
              <button className={style.send_button}>Отправить</button>
              </form>
            </div>
        }
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
}

export default ContactPage
