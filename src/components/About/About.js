import React from "react";
import style from './About.module.css'
import AboutDescription from "./AboutDescription/AboutDescription";
import AboutInfo from "./AboutInfo/AboutInfo";

const About = () => {
    return ( <div className={style.about}>
                <div className={style.aboutTitle}> 
                    <h1> О компании </h1>
                    <h3> МИССИЯ КОМПАНИИ HOUSE VOP - работать, создавая лучшее качество жизни для людей!</h3>
                    <p>"HOUSE VOP" - это группа предприятий, оказывающих широкий спектр услуг на строительном рынке Кыргызстана, Казахстана и России. 
                        Основной деятельностью компаний является проектирование, строительство и реализация жилой и коммерческой недвижимости.</p>
                </div>
            <div> <AboutInfo/> </div>
            <div> <AboutDescription/> </div>
         </div>
    )
}

export default About