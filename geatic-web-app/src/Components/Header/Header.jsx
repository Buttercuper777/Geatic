import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return(
        <section>
            <header className={s.Header}>
                <div className={s.headerLogo}>
                    <a>Geatic.</a>
                </div>

                <div className={s.headerList}>
                    <a href="" className={s.headerLink}>Печать</a>
                    <a href="" className={s.headerLink}>Статус заказа</a>
                    <a href="" className={s.headerLink}>Создание модели</a>
                    <a href="" className={s.headerLink}>Помощь</a>
                    <a href="" className={s.headerLink}>О нас</a>
                </div>

                <div className="headerBtns">
                </div>
            </header>
        </section>
    );
}
export default Header;

