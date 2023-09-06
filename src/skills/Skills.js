import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";

function Skills() {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'skills'}/>
                <Fade>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'TS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et hic id impedit odio rerum sint tempore.'}/>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et hic id impedit odio rerum sint tempore.'}/>
                    <Skill title={'REACT'} description={' Animi distinctio excepturi iusto praesentium quos saepe? Distinctio exercitationem impedit natus omnis vel?'}/>
                    <Skill title={'REDUX'} description={' Animi distinctio excepturi iusto praesentium quos saepe? Distinctio exercitationem impedit natus omnis vel?'}/>
                    <Skill title={'ENGLISH'} description={' Animi distinctio excepturi iusto praesentium quos saepe? Distinctio exercitationem impedit natus omnis vel?'}/>
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;
