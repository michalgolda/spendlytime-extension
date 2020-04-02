import React from 'react';

import style from './LoginForm.css';

export default function LoginForm(){
    return(
        <form className={style.login}>
            <div className={style.login__group}>
                <input
                    className={`${style.login__input} ${style.login__input_email}`}
                    type="text"
                    placeholder="Email"
                />
            </div>

            <div className={style.login__group}>
                <input
                    className={`${style.login__input} ${style.login__input_password}`}
                    type="password"
                    placeholder="Hasło"
                />
            </div>
            <button className={style.login__button}>Zaloguj się</button>
        </form>
    );
}