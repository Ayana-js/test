import React from "react";
import Main1 from '../../img/main1.jpg'
import Main2 from '../../img/main2.jpg'
import Main3 from '../../img/main3.jpg'
import Main4 from '../../img/main4.jpg'
import Main5 from '../../img/main5.jpeg'
import style from './Main.module.css'

const Main = () => {
    return <div className={style.wrap}> 
            <div className={style.firstWrap}>
               <img src={Main1} className={style.background}/> 
               <p> HOUSE VOP-ДОМ МЕЧТЫ</p>
               <img src={Main2} className={style.background}/> 
            </div>
            <div className={style.secondWrap}>
               <div> <p> ТАМ ГДЕ ТЕПЛО И УЮТНО </p>
                    <img src={Main3} className={style.background}/> 
                </div>    
                <img src={Main4} className={style.background}/> 
            </div>
            <div className={style.thirdWrap}>
               <img src={Main5} className={style.background}/> 
               <p> МЫ ОБЪЕДИНИЛИ КРАСОТУ И КОМФОРТ</p>
            </div>
         </div>
}

export default Main