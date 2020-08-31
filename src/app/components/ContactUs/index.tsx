import React from 'react'
import style from './style.css'

const ContactUs = () => {
  const [showMailSended, setShowMailSended] = React.useState(false)
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [text, setText] = React.useState('')
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    debugger;
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
    <div className={style.contactus}>
      <div className={style.columns}>
      { showMailSended ? 
          <div className={style.column_left}><h2>Ваше сообщение направлено,</h2><h2> вам ответит специалист "Иннокода"</h2></div> :
          <div className={style.column_left}>      
          <form onSubmit={onSubmit}>     
              <h2>оставьте заявку <br/>на консультацию</h2>
              <input className={style.input} value={phone} onChange={onPhoneChange} name="phone" autoComplete="off" placeholder="Ваш номер телефона"></input>
              <input className={style.input} value={email} onChange={onEmailChange} name="email" autoComplete="off" placeholder="Ваш email"></input>
              <input className={style.input} value={text} onChange={onTextChange} name="text" autoComplete="off" placeholder="Ваш вопрос"></input>
              <button className={style.send_button}>Отправить</button>
          </form>
          </div>
      }
          <div className={style.column_right}>
              
          <img src="assets/svg/undrawmobilemessage.svg" />
          </div>
        </div>
    </div>
  )
}

export default ContactUs
