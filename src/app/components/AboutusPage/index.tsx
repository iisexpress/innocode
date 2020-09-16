import React from 'react'
import style from './style.css'

const AboutusPage = () => {
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
    <div className={style.news_header}></div>
    <div className={style.contactus}> 
    { showMailSended ? 
          <div className={style.contactus_container}><h2>Ваше сообщение направлено,</h2><h2> вам ответит специалист "Иннокода"</h2></div> :
          <div className={style.contactus_container}>      
          <form onSubmit={onSubmit}>     
              <h2>Остались вопросы?<br/>Напишите нам!</h2>
              <input className={style.input} value={phone} onChange={onPhoneChange} name="phone"  pattern="^(((\+[\d]{2,2})|\+\([\d]{2,2}\))|[0])?[0-9]+$" required title="+79998887766" autoComplete="off" placeholder="Ваш номер телефона"></input>
              <input className={style.input} value={email} type="email" required title="my@mail.com" onChange={onEmailChange} name="email" autoComplete="off" placeholder="Ваш email"></input>
              <input className={style.input} value={text} onChange={onTextChange} required name="text" autoComplete="off" placeholder="Ваш вопрос"></input>
              <button className={style.send_button}>Отправить</button>
          </form>
          </div>
      }      
    </div>
  </div>
  )
}

export default AboutusPage
