import React from 'react'
import style from './style.css'
import ContactUs from 'app/components/ContactUs';

const ItServicesPage = () => (
  <div className={style.content}>
    <div className={style.services}>
      <h2>наши It-услуги</h2>
      <div className={style.line}>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-mobiledev.svg" />
          </div>
          <span className={style.service_item_label}>
            Разработка мобильных приложений (iOS, Android)
          </span>
        </div>
        <div className={style.service_item}>
        <div className={style.service_item_icon}>
            <img src="assets/svg/service-mobiledesign.svg" />
            </div>
          <span className={style.service_item_label}>
          Дизайн мобильных приложений
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-landingpage.svg" /></div>
          <span className={style.service_item_label}>
          Создание современных сайтов и Landing Page
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-uniqdesign.svg" />
            </div>
          <span className={style.service_item_label}>
          Разработка уникального дизайна сайта
          </span>
        </div>
      </div>
      <div className={style.line}>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-internetshop.svg" />
            </div>
          <span className={style.service_item_label}>
          Интернет-магазины “под ключ”
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-ardev.svg" />
            </div>
          <span className={style.service_item_label}>
          Разработка AR приложений
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-3dmodel.svg" /></div>
          <span className={style.service_item_label}>
          3D анимация
          </span>
        </div>
        <div className={style.service_item}>
          <div className={style.service_item_icon}>
            <img src="assets/svg/service-telegrambot.svg" /></div>
          <span className={style.service_item_label}>
          Создание ботов в Telegram
          </span>
        </div>
      </div>
    </div>
    <div className={style.whywe}>
      <h2>Почему мы?</h2>
      <div className={style.whywe_text}>
      Текст про нашу уникальность индивидуальный подход и преимущества. Текст про нашу уникальность индивидуальный подход и преимущества. Текст про нашу уникальность индивидуальный подход и преимущества. Текст про нашу уникальность индивидуальный подход и преимущества. Текст про нашу уникальность индивидуальный подход и преимущества. Текст про нашу уникальность индивидуальный подход и преимущества.
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
              Выявляем вашу<br/> потребность
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
            Производим расчеты,<br/> выставляем<br/> коммерческое<br/> предложение<br/> со сметой работ<br/> и сроками
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
            Отвечаем на все вопросы<br/> и учитываем пожелания
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
            Озвучиваем наши<br/> возможности
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
            Формируем и <br/>подписываем договор
            </label>
          </div>
        </div>
        <div className={style.getservice_item_container_arrow}>
          <img src="assets/svg/gotoright.svg" />
        </div>
        <div className={style.getservice_item_container}>
          <div className={style.getservice_item_number}>
              <label>8</label>
            </div>
          <div className={style.getservice_item}>          
            <label>
            Сдаем проект
            </label>
          </div>
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

export default ItServicesPage
