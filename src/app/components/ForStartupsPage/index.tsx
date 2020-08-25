import React from 'react'
import style from './style.css'
import ContactUs from 'app/components/ContactUs'

const ForStartupsPage = () => (
  <div className={style.content}>
    <div className={style.services}>
      <h2>услуги для Стартапов</h2>
      <h3>Комфортная и оперативная поддержка IT-стартапов на всех этапах</h3>
      <div className={style.line_service}>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/case-create.svg" />
            <label>Формирование<br/>кейса</label>
          </div>
          <span className={style.service_item_label}>
          - Бизнес-план <br/>
          - Финмодель <br/>
          - Презентация
          </span>
        </div>
        <div className={style.service_item}>
            <div className={style.service_item_header}>
            <img src="assets/svg/company-registration.svg" />
            <label>Регистрация</label>
            </div>
          <span className={style.service_item_label}>
          - ООО, ИП, НКО <br/>
          - Учредительные договоры. <br/>
          - Определение долей
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/remote-accounting.svg" />
            <label>Сопровождение<br/>сделок</label>
          </div>
          <span className={style.service_item_label}>
          - Разработка/анализ договоров <br/>
          - Консультации <br/>
          - Партнерские соглашени
          </span>
        </div>
      </div><div className={style.line_service}>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/remote-accounting.svg" />
            <label>Постановка<br/>бухгалтерского учета</label>
          </div>
          <span className={style.service_item_label}>
          - Консультации <br/>
          - Сопровождение <br/>
          - Отчетность
          </span>
        </div>
        <div className={style.service_item}>
            <div className={style.service_item_header}>
            <img src="assets/svg/hr-managment.svg" />
            <label>Кадровое<br/>делопроизводство</label>
            </div>
          <span className={style.service_item_label}>
          - Прием и увольнение <br/>
          - Должностные инструкции<br/> 
          - Личные дела, трудовые <br/>книжки
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/secret-develop.svg" />
            <label>Оформление режима<br/>коммерческой тайны</label>
          </div>
          <span className={style.service_item_label}>
          - Консультации <br/>
          - NDA <br/>
          - Ввод режима коммерческой<br/>
           тайны
          </span>
        </div>
      </div><div className={style.line_service}>
        <div className={style.service_item}>
          <div className={style.service_item_header}>
            <img src="assets/svg/legal-support.svg" />
            <label>Юридическое<br/>сопровождение</label>
          </div>
          <span className={style.service_item_label}>
          - Инвестиционный договор<br/> 
          - Консультации<br/> 
          - Судебная практика
          </span>
        </div>
        <div className={style.service_item}>
            <div className={style.service_item_header}>
            <img src="assets/svg/register-sign.svg" />
            <label>Регистрация</label>
            </div>
          <span className={style.service_item_label}>
          - Товарного знака в Роспатенте <br/>
          - ПО в Роспатенте<br/> 
          - Оформление передачи прав<br/> (продажа/лицензия)
          </span>
        </div>
        <div className={style.service_item} style={{visibility: 'hidden'}}>          
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

export default ForStartupsPage
