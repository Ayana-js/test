import React from "react";
import style from './FilterMenu.module.css'
import classnames from 'classnames'

const FilterMenu = ({sorting, onClickSort}) => {

    return  <div> <div className={style.wrap}>
    <div className={style.buttons}>
    <button 
        className={classnames({
          [style.button]: true,
          [style.selected]: sorting === 'Все',
          [style.text]: true
        })}
        onClick={()=>onClickSort('Все')}
      >
        Все
      </button>
      <button
        className={classnames({
          [style.button]: true,
          [style.selected]: sorting === 'Завершенные',
          [style.text]: true
        })}
        onClick={()=>onClickSort('Завершенные')}
      >
        Завершенные
      </button>
      <button 
        className={classnames({
          [style.button]: true,
          [style.text]: true,
          [style.selected]: sorting === 'Сдан в эксплуатацию'
        })}
        onClick={()=>onClickSort('Сдан в эксплуатацию')}
      >
        Сдан в эксплуатацию
      </button>
      <button 
        className={classnames({
          [style.button]: true,
          [style.text]: true,
          [style.selected]: sorting === 'Хиты продаж'
        })}
        onClick={()=>onClickSort('Хиты продаж')}
      >
        Хиты продаж
      </button>
      <button 
        className={classnames({
          [style.button]: true,
          [style.text]: true,
          [style.selected]: sorting === 'Идет строительство'
        })}
        onClick={()=>onClickSort('Идет строительство')}
      >
        Идет строительство
      </button>
      <button 
        className={classnames({
          [style.button]: true,
          [style.text]: true,
          [style.selected]: sorting === 'Новые проекты'
        })}
        onClick={()=>onClickSort('Новые проекты')}
      >
        Новые проекты
      </button>
    </div>
  </div> </div>
}

export default FilterMenu