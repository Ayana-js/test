import React from "react";
import style from './Contact.module.css'
import Map from "./Map";
import instagramIcon from '../../img/insta.png';
import telegramIcon from '../../img/telegram.png'
import facebookIcon from '../../img/facebook.png'

class Contact extends React.Component {
    render() {
        return <div className={style.main}> 
            <p> КОНТАКТЫ КОМПАНИИ HOUSE VOP</p>
            <div className={style.card}> 
               <div className={style.cardInfo}>
                    <span> БИШКЕК,
                    УЛ.БАКАЕВА, Д.132
                    <div className={style.cardInfoContact}>
                    <a 
                        href="mailto: ayana.sultanovaa@gmail.com"
                        target='_blank' rel='noopener noreferrer'>
                        housevop@gmail.com
                    </a>
                    <div>
                    +996 (556) 55-11-11
                    +996 (706) 55-11-11
                    +996 (776) 55-11-11
                    </div>
                    </div>
                    </span> 
                <div className={style.contactIcons}>
                <div>
                    <a  className={style.icon}
                        href="https://instagram.com/ihlaskg?utm_medium=copy_link"
                        target='_blank' rel='noopener noreferrer'>
                        <img  src={instagramIcon} alt="" width='40px'/>
                    </a>
                </div>
                <div>
                    <a  className={style.icon}
                        href="https://instagram.com/ihlaskg?utm_medium=copy_link"
                        target='_blank' rel='noopener noreferrer'>
                        <img  src={telegramIcon} alt="" width='40px'/>
                    </a>
                </div>
                <div>
                    <a  className={style.icon}
                        href="https://instagram.com/ihlaskg?utm_medium=copy_link"
                        target='_blank' rel='noopener noreferrer'>
                        <img  src={facebookIcon} alt="" width='40px'/>
                    </a>
                </div>
                </div>
            </div>
            <div className={style.cardMap}> < Map /> </div>
            </div>
        </div>
    }
}

export default Contact