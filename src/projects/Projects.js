import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/mockup_to_do_list.png"
import socialImage from "./../assets/image/socnet.png"

function  Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'} description={'Short description'}/>
                    <Project style={todolist} title={'Todo list'} description={'Short description'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
