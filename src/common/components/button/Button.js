import React from 'react';
import style from './Button.module.scss';

function Button(props) {

    const onClick = (e) => {
        e.preventDefault()
    }

    return (
        <a onClick={onClick} href={''} className={style.btn}>{props.text}</a>
    );
}

export default Button;
