import React from "react";
import style from "./mainContent.module.sass"

function MainContent() {
    const presents = [
        { title: "Виджеты", description: "30 готовых решений" },
        { title: "Dashboard", description: "с показателями вашего бизнеса" },
        { title: "Skype Аудит", description: "отдела продаж и CRM системы" },
        { title: "35 дней", description: "использования CRM" },
    ];

    return(
        <section className={style.mainContent}>
            <div className={style.mainContent__heading}>
                <h1 className={style.mainContent__heading_title}>Зарабатывайте больше
                    <br/><span className={style.mainContent__heading_title_grad}>с WELBEX</span>
                </h1>
                <p className={style.mainContent__heading_descr}>
                    Развиваем и контролируем продажи за вас
                </p>
            </div>
            <div className={style.mainContent__info}>
                <h3 className={style.mainContent__info_title}>
                    Вместе с <span className={style.mainContent__info_title_grad}>бесплатной <br/>консультацией</span> мы дарим:
                </h3>
                <ul className={style.mainContent__info_presents}>
                    {presents.map(({title, description}) => (
                        <li key={title} className={style.mainContent__info_presents_item}>
                            <h5 className={style.mainContent__info_presents_item_title}>{title}</h5>
                            <p className={style.mainContent__info_presents_item_description}>{description}</p>
                        </li>
                    ))}
                </ul>
                <button className={style.mainContent__info_btn}>Получить консультацию</button>
            </div>
        </section>
    )
}

export default MainContent