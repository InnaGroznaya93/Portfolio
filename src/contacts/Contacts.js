import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import Fade from "react-reveal/Fade";

function Contacts() {
    return (
            <div id={"contacts"} className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title text={'Contact'}/>
                <div className={style.formFields}>
                    <Fade>
                    <form action={''}>
                        <div className={style.formField}>
                            <input type={'text'} placeholder={'Name'}/>
                        </div>
                        <div className={style.formField}>
                            <input type={'text'} placeholder={'E-mail'}/>
                        </div>
                        <div className={style.formField}>
                            <textarea placeholder={'Your message'}/>
                        </div>
                        <div>
                            <Button text={'Send'}/>
                            {/*<button type={'submit'} className={style.button}>Send message</button>*/}
                        </div>

                    </form>
                    </Fade>
                </div>
            </div>
    );
}

export default Contacts;
