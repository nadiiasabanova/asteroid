import React from 'react';
import css from './Header.module.css';

function Header(props) {
    return (
        <div className={css.logo}><h1 className={css.h1}>Armagedon 2024</h1>
            <p> OOO "B. Willis Team".
                Blowing up asteroids since 1998.</p>

        </div>
    );
}

export default Header;