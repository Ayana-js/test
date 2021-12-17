import React from "react";
import style from '../../About/About.module.css'

const AboutDescription = () => {
    return <div className={style.aboutDescription}> 
        <h1> ПОЧЕМУ HOUSE VOP? </h1>
        <div className={style.aboutDescriptionBlocks}>
        <div className={style.aboutDescBlock}> 
           <p>
            Наши дома - теплые!
            Компания «HOUSE VOP» ответственно подходит к вопросу утеплению домов.
           </p>
        </div>
        <div className={style.aboutDescBlock}> 
           <p>
           Наши дворы - зеленые и ухоженные!
            Мы производим качественное озеленение дворовых участков и обустраиваем детские площадки.
         В этом вы можете убедиться обойдя все наши завершенные объекты.
           </p>
        </div>
        <div className={style.aboutDescBlock}> 
           <p>
           Наши детские площадки - безопасные!
            Основной акцент мы делаем на детские площадки.
             Это очень важно для каждой семьи, когда ребенок занимается спортом, играют друг с другом. Ваш ребенок не будет сидеть за компьютером!
           </p>
        </div>
        <div className={style.aboutDescBlock}> 
           <p>
           Онлайн камера
            За всеми нашими стройками вы можете наблюдать через online видеокамеры. Это очень удобно.
           </p>
        </div>
        <div className={style.aboutDescBlock}> 
           <p>
           Новейшие материалы и технологии
            Мы используем качественные материалы, которые отвечают всем требованиям СНИПов и ГОСТов.
           </p>
        </div>
        <div className={style.aboutDescBlock}> 
           <p>
           Гибкая и удобная система оплаты
                До 24 месяцев в рассрочку!
                Никаких % !
                30% первоначального взноса!
           </p>
           </div>
        </div>
    </div>
}

export default AboutDescription