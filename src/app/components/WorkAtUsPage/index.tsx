import React from 'react'
import style from './style.css'

const WorkAtUsPage = () => {
  const [showMailSended, setShowMailSended] = React.useState(false)
  const [hasFile, setHasFile] = React.useState(false)
  const [fileName, setFileName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [file, setFile] = React.useState<File>()
  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    event.preventDefault();
    let formData = new FormData();
    if(file)
      formData.append('file', file);
    formData.append('email', email);
    fetch("/api/mail/sendhr", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, */*',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
      setShowMailSended(true);
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
      if(event.target.files?.length){
        setHasFile(true);
        setFileName(event.target.files[0].name)
        setFile(event.target.files[0])
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
                <input className={style.input} onChange={onEmailChange} name="email" autoComplete="off" placeholder="Ваш email"></input>
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
