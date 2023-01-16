import "./MobileNav.css"
import React, { useState } from "react"

function MobileNavComponent() {

    const [subMenuIndex, setSubMenu] = useState<number | null>(null);

    function handleClick(index: number) {
        setSubMenu(index)
    };


    return (
        <div className="nav-mobile">
            <ul className="nav-mobile-list">
                <li className="nav-mobile-list-item" onClick={() => { handleClick(0) }}>
                    <p className="nav-mobile-list-item-link">Читалня</p>
                </li>
                <li className="nav-mobile-list-item" onClick={() => { handleClick(1) }}>
                    <p className="nav-mobile-list-item-link">Работилница</p>
                </li>
                <li className="nav-mobile-list-item" onClick={() => { handleClick(2) }}>
                    <p className="nav-mobile-list-item-link">Колекции</p>
                </li>
                <li className="nav-mobile-list-item" onClick={() => { handleClick(3) }}>
                    <p className="nav-mobile-list-item-link">Проекти</p>
                </li>
            </ul>
            {subMenuIndex === 0 && <ul className="nav-mobile-list sub">
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Автори</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Преводачи</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Книги</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Произведения</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Случайна творба</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Серии</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Поредици</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Читателски мнения</a>
                </li>
            </ul>}

            {subMenuIndex === 1 && <ul className="nav-mobile-list sub">
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Новодобавено</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Работно ателие</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Ресурси</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Статистика</a>
                </li>
            </ul>}

            {subMenuIndex === 2 && <ul className="nav-mobile-list sub">
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Библиотека за ученика</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Из Мрежата</a>
                </li>
            </ul>}

            {subMenuIndex === 3 && <ul className="nav-mobile-list sub">
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Библиотека</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Библиоман</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Смехурко</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Форум</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Форум</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Чат</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Дачко</a>
                </li>
                <li className="nav-mobile-list-item">
                    <a href="" className="nav-mobile-list-item-link">Сръчко</a>
                </li>
            </ul>}
        </div>
    )
};

export default MobileNavComponent;