import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function RemoteWork() {

    const onClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className={style.remBlock}>
            <div className={`${styleContainer.container} ${style.remContainer}`}>
                <Title text={'I\'m considering options for remote work'}/>
                <Button text={'Hire me'}/>
            </div>
        </div>
    );
}

export default RemoteWork;
