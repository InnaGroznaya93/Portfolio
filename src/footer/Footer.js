import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.footerTitle}>Inna Groznaya</h3>
                <ul className={style.socialLinks}>
                    <li className={style.socialLink}><a>Facebook</a></li>
                    <li className={style.socialLink}><a>Instagram</a></li>
                    <li className={style.socialLink}><a>Linkedin</a></li>
                </ul>
                <span className={style.copyright}>&#169; 2023 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
