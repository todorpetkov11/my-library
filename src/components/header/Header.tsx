import "./Header.css"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faNavicon, faSignIn } from "@fortawesome/free-solid-svg-icons"
import MobileNavComponent from "./MobileNav"

function HeaderComponent() {

    const [mobileMenuVisible, setMobileVisibility] = useState(false)

    function mobileMenuClick() {
        setMobileVisibility(!mobileMenuVisible)
    }

    return (
        <div>
            <div className="header">
                <div className="search-wrapper">
                    <input type="text" className="search-input" placeholder="Потърси..."/>
                    <button type="submit" className="btn search">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </button>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-list-item">
                            <p className="header-nav-list-item-link">Читалня</p>
                        </li>
                        <li className="header-nav-list-item">
                            <p className="header-nav-list-item-link">Работилница</p>
                        </li>
                        <li className="header-nav-list-item">
                            <p className="header-nav-list-item-link">Колекции</p>
                        </li>
                        <li className="header-nav-list-item">
                            <p className="header-nav-list-item-link">Проекти</p>
                        </li>
                    </ul>
                </nav>
                <div className="login-nav-wrapper">
                    <div className="login-wrapper">
                        <button className="btn normal login">
                            <FontAwesomeIcon icon={faSignIn} />
                            <span>Вход</span>
                        </button>
                    </div>
                    <div className="nav-burger">
                        <button type="button" className="btn normal" onClick={() => { mobileMenuClick() }}>
                            <FontAwesomeIcon icon={faNavicon} />
                        </button>
                    </div>
                </div>
            </div>
            {mobileMenuVisible ? <MobileNavComponent /> : ''}

        </div>
    )
}

export default HeaderComponent