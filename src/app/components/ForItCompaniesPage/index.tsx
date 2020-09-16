import React from 'react'
import style from './style.css'
import ContactUs from 'app/components/ContactUs'

const ForItCompaniesPage = () => (
  <div className={style.content}>
    <div className={style.services}>
      <h2>услуги для IT-компаний</h2>
      <h3>Комфортная и оперативная поддержка IT-компаний</h3>
      <div className={style.line}>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/legal-support.svg" />
            <label>Юридическое<br/>сопровождение</label>
          </div>
          <span className={style.service_item_label}>
          - Создание любых видов<br/> договоров, NDA, договоров<br/> оказания услуг и др.<br/> 
          - Политика обработки<br/> персональных данных<br/> 
          - Регистрация товарного<br/> знака/ПО в Роспатенте.<br/> 
          - Сопровождение сделок<br/> по продаже ПО
          </span>
        </div>
        <div className={style.service_item}>
            <div className={style.service_item_header}>
            <img src="assets/svg/protection-interest.svg" />
            <label>Защита<br/> интересов</label>
            </div>
          <span className={style.service_item_label}>
          - Досудебное сопровождение: <br/>претензия, мирное разрешение<br/>
          - Исковое заявление/отзыв<br/> 
          - Представительство в суде <br/>(общая юрисдикция и арбитраж,<br/> все инстанции)<br/>
          - Консультации на всех этапах
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/remote-accounting.svg" />
            <label>Удаленный<br/>бухгалтерский<br/>учет</label>
          </div>
          <span className={style.service_item_label}>
          - Создание и ведение<br/> необходимого портфеля<br/> документации<br/> 
          - Постановка учета техники<br/> и прочих средств<br/> 
          - Сдача отчетности <br/>
          - Произведение начислений<br/> и оплат <br/>
          - Реестр первичной документации.<br/>
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/hr-managment.svg" />
            <label>Удаленное<br/>кадровое<br/>делопроизводство</label>
            </div>
          <span className={style.service_item_label}>
          - Должностные инструкции <br/>
          - Карточки личных дел <br/>
          - Оформление и увольнение<br/> сотрудников <br/>
          - Заключение трудовых<br/> договоров <br/>
          - Банк трудовых книжек <br/>
          - Ведение табеля учета рабочего<br/> времени и т.д.
          </span>
        </div>
      </div>
      
    </div>

    
    <div className={style.getservice}>
      <h2>как получить услугу</h2>
      <div className={style.line}>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>1</label>
            </div>
          <div className={style.getservice_item}>     
            <img src="assets/svg/it-service-1.svg" className={style.item_backg_1} />        
            <p>
              Оставляете заявку на<br/> звонок нашего<br/> специалиста любым <br/>удобным способом:<br/> 
              <img src="assets/svg/telegram-white-sml.svg" />&nbsp;<img src="assets/svg/whatsapp-white-sml.svg" />&nbsp;
              или звонок<br/> по номеру 8 800 000 000 00
            </p>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow}>
          <img src="assets/svg/gotoright.svg" />
        </div>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>2</label>
            </div>
          <div className={style.getservice_item}>      
            <img src="assets/svg/it-service-2.svg" className={style.item_backg_2} />       
            <p>
              За вами закрепляется <br/>персональный<br/> помощник<br/> с первого звонка<br/> до сдачи проекта
            </p>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow}>
          <img src="assets/svg/gotoright.svg" />
        </div>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>3</label>
            </div>
          <div className={style.getservice_item}>      
            <img src="assets/svg/it-service-3.svg" className={style.item_backg_3} />       
            <label>
            Обеспечиваем 100%<br/> конфиденциальность
            </label>
          </div>
        </div>
      </div>
      <div className={style.line_down_arrow}>
        <div className={style.getservice_item_container_down_arrow}></div>
        <div className={style.getservice_item_container_down_arrow_space}></div>
        <div className={style.getservice_item_container_down_arrow}></div>
        <div className={style.getservice_item_container_down_arrow_space}></div>
        <div className={style.getservice_item_container_down_arrow}>
          <img src="assets/svg/gotodown.svg" />
        </div>
      </div>
      <div className={style.line}>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>6</label>
            </div>
          <div className={style.getservice_item}>      
            <img src="assets/svg/it-service-7.svg" className={style.item_backg_7} />       
            <label>
            Формируем и<br/> подписываем договор
            </label>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow}>
          <img src="assets/svg/gotoleft.svg" />
        </div>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>5</label>
            </div>
          <div className={style.getservice_item}>     
            <img src="assets/svg/it-service-5.svg" className={style.item_backg_5} />        
            <label>
            Делаем предложение по <br/>сопровождению нашими<br/> специалистами
            </label>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow}>
          <img src="assets/svg/gotoleft.svg" />
        </div>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>4</label>
            </div>
          <div className={style.getservice_item}>          
            <img src="assets/svg/it-service-3.svg" className={style.item_backg_3} />   
            <label>
            Выявляем вашу<br/> потребность , в <br/>соответствии с ней<br/> квалифицированный<br/> специалист бесплатно<br/> предоставляет оценку,<br/> анализ и решение.
            </label>
          </div>
        </div>
      </div> 
      <div className={style.line_down_arrow}>
        <div className={style.getservice_item_container_down_arrow}>
          <img src="assets/svg/gotodown.svg" />
        </div>
        <div className={style.getservice_item_container_down_arrow_space}></div>
        <div className={style.getservice_item_container_down_arrow}></div>
        <div className={style.getservice_item_container_down_arrow_space}></div>
        <div className={style.getservice_item_container_down_arrow}></div>
      </div>
      <div className={style.line}>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>7</label>
            </div>
          <div className={style.getservice_item}>      
            <img src="assets/svg/it-service-6.svg" className={style.item_backg_6} />       
            <label>
            Получаете услугу
            </label>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow} style={{ visibility: 'hidden'}}>
          <img src="assets/svg/gotoright.svg" />
        </div>
        <div className={style.getservice_item_unvisible}>
        </div>
        <div className={style.getservice_item_container_arrow} style={{ visibility: 'hidden'}}>
          <img src="assets/svg/gotoright.svg" />
        </div>
        <div className={style.getservice_item_unvisible}>
        </div>
      </div>
    </div>
    <ContactUs/>
</div>
)

export default ForItCompaniesPage
