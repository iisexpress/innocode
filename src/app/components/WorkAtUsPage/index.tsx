import React from 'react'
import style from './style.css'

const WorkAtUsPage = () => {
  const [showMailSended, setShowMailSended] = React.useState(false)
  const [hasFile, setHasFile] = React.useState(false)
  const [fileName, setFileName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  email: email })
    };
    fetch('/api/mail/send', requestOptions)
        .then(response => response.json())
        .then(data => {
          setShowMailSended(true);
        });
  }

  const handleChange = (selector: React.ChangeEvent<HTMLInputElement>) =>
  {
      if(selector.target.files?.length){
        setHasFile(true);
        setFileName(selector.target.files[0].name)
      }else{
        setHasFile(false);
      }
  }
  const onFileDelete = () =>
  {
    setHasFile(false)
  }

  return(
    <div className={style.content}>
      <div className={style.columns}>
        <div className={style.column_left}>
          <form onSubmit={onSubmit}> 
            <span className={style.header_label}>Работа у Нас</span>
            <span className={style.info_label}>Пришлите свое резюме,</span>
            <span className={style.info_label}>мы свяжемся с Вами!</span>
            {
              showMailSended ?
              <div className={style.file_sended}>
                Спасибо, ваше резюме отправлено
              </div>   :
              <div>
                <input className={style.input} onChange={onEmailChange} placeholder="Ваш email"></input>
                {
                  hasFile ? <div className="">
                              <div className={style.fileName}><label>{fileName}</label><img onClick={onFileDelete} src="assets/svg/delete_file.svg" /></div>
                              <button className={style.send_button} id="send-btn">Отправить резюме</button>
                            </div> :
                            <label htmlFor="file-upload" className={style.upload_button} id="file-upload-btn"> 
                              <div className={style.upload_button_container}>
                                <img src="assets/svg/upload.svg" />
                                <span>Загрузить резюме</span>
                              </div>
                            </label>
                }
                <input className={style.input_file} id="file-upload" onChange={handleChange} type="file" required/>     
              </div>
            }  
          </form>
        </div>
        <div className={style.column_right}>           
              <img src="assets/svg/workatus.svg" />
        </div>
      </div>
  </div>
  )
}

export default WorkAtUsPage
