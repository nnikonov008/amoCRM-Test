import React from "react";

import Logo from "../../image/logo_welbex.svg"
import style from "./header.module.sass"
import Contacts from "../Contacts/contacts";

function Header(props) {
    const menuItems = [
        {id: 1, title: 'Услуги', href: 'services'},
        {id: 2, title: 'Виджеты', href: 'widgets'},
        {id: 3, title: 'Интеграции', href: 'integration'},
        {id: 4, title: 'Кейсы', href: 'cases'},
        {id: 5, title: 'Сертификаты', href: 'certificates'}
    ]

    return(
        <header className={style.header}>
            <a className={style.logo} href="#">
                <img src={Logo} alt="Welbex"/>
                <p className={style.logo__descr}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </a>
            <ul className={style.menu}>
                {menuItems.map(({id, title, href}) => (
                    <a key={id} href={`/${href}`} className={style.menu__item}>{title}</a>
                ))}
            </ul>
            <Contacts/>
        </header>
    )
}

export default Header