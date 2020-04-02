import React from 'react';

import style from './LoadingSpin.css';


export default function LoadingSpin(){
    return(
        <div className={style.spinner}>
            <div className={style.rect1}></div>
            <div className={style.rect2}></div>
            <div className={style.rect3}></div>
            <div className={style.rect4}></div>
            <div className={style.rect5}></div>
        </div>
    );
}