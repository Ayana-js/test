import React from "react";
import style from "../../About/About.module.css"

const AboutInfo = () => {
    return <div className={style.aboutInfo}> 
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>18 ЛЕТ</span> НА СТРОИТЕЛЬНОМ РЫНКЕ КЫРГЫЗСТАНА</p>
        </div>
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>16 </span>КОЛ-ВО ПОСТРОЕННЫХ МНОГОЭТАЖЕК (ОБЪЕКТОВ)</p>
        </div>
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>1437</span>КОЛ-ВО СДАННЫХ В ЭКСПЛУАТАЦИЮ КВАРТИР</p>
        </div>
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>410</span>К-ВО СДАННЫХ В ЭКСПЛУАТАЦИЮ ПАРКОВОЧНЫХ МЕСТ</p>
        </div>
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>1 млн.м3/год</span>СОБСТВЕННОЕ ПРОИЗВОДСТВО БЕТОНА</p>
        </div>
        <div className={style.box}> 
            <p className={style.text}> <span className={style.boldText}>2.0 млн. т/год</span> СОБСТВЕННОЕ ПРОИЗВОДСТВО ОТСЕВА И ЩЕБНЯ</p>
        </div>
    </div>
}

export default AboutInfo