import c from './Header.module.css';
import { useState } from "react";
import logo from '../../assets/brimit_logo.png';
import welcomeText from '../../assets/welcome_text.png';
import gearIcon from '../../assets/icon_settings.png';
import questionIcon from '../../assets/icon_question_mark.png';
import menuIcon from '../../assets/icon_menu.png';
import cancelIcon from '../../assets/icon_cancel.png';


function Header() {
    const [isExpanded, setIsExpanded] = useState(false);


    const menuBtnHandler = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <header className={c.header}>
            <img className={c.logoImage} src={logo} alt='Brimit Logo'/>
            <img className={c.welcomeText} src={welcomeText} alt='Welcome text'/>
            <div className={c.headerBtns}>
                <img className={c.iconBtn} src={gearIcon} alt='Settings icon'/>
                <img className={c.iconBtn} src={questionIcon} alt='Question mark icon'/>
                <div className={c.userAccountBtn} />
            </div>
            <button className={c.menuBtn} onClick={menuBtnHandler}>
                <img src={menuIcon} alt='Menu icon' />
            </button>
            <div className={`${c.mobileMenu} ${isExpanded ? c.expanded : ''}`}>
                <nav>
                    <div>
                        <button>Account</button>
                        <button>Settings</button>
                        <button>Help</button>
                    </div>
                    <button className={c.cancelBtn} onClick={menuBtnHandler}><img src={cancelIcon} alt='Back icon'/></button>
                </nav>
            </div>
        </header>
    )
}

export default Header;

