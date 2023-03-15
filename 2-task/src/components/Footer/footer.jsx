import React from "react";
import style from "./footer.module.sass"
import Contacts from "../Contacts/contacts";

function Footer() {
    const aboutCompany = {
        title: "О компании",
        companyLinks: ["Партнёрская программа", "Вакансии"],
    };

    const menu = {
        title: "Меню",
        menuLinks: [
            "Расчёт стоимости", "Услуги", "Виджеты", "Интеграции", "Наши клиенты", "Кейсы",
            "Благодарственные письма", "Сертификаты", "Блог на Youtube", "Вопрос / Ответ",
        ],
    };

    return (
        <footer className={style.footer}>
            <nav className={style.footer__menu}>
                <h5 className={style.footer__menu_title}>{aboutCompany.title}</h5>
                {aboutCompany.companyLinks.map((item, i) => (
                    <a className={style.footer__menu_description} key={i} href="#">{item}</a>
                ))}
            </nav>
            <nav className={style.footer__menu}>
                <h5 className={style.footer__menu_title}>{menu.title}</h5>
                {menu.menuLinks.map((item, i) => (
                    <a className={style.footer__menu_description} key={i} href="#">{item}</a>
                ))}
            </nav>
            <div className={style.footer__menu}>
                <h5 className={style.footer__menu_title}>Контакты</h5>
                <Contacts isAddress/>
                <p className={style.footer__menu_copyright}>
                    &#169;WELBEX {new Date().getUTCFullYear()}. Все права защищены.
                </p>
                <p className={style.footer__menu_policy}>Политика конфиденциальности</p>
            </div>
        </footer>
    )
}

export default Footer