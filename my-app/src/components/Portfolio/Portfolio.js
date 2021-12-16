import React from "react";
import style from '../Portfolio/Portfolio.module.css'
import FilterMenu from "./FilterMenu/FilterMenu";
import HouseBlock from "./HouseBlock/HouseBlock";

class Portfolio extends React.Component  {
    sortingItemsTitle = {
        all: 'Все',
        finished: 'Завершенные',
        ready: 'Сдан в эксплуатацию',
        new: 'Новые проекты',
        popular: 'Хиты продаж',
        inProcess: 'Идет строительство'
      }

      state = {
          sorting: this.sortingItemsTitle.all
      }
      onClickSort = sorting => this.setState({ sorting: sorting })

    render() {
        let sortingItems
      switch (this.state.sorting) {
      case this.sortingItemsTitle.finished: sortingItems = this.props.houses.filter(h => h.isFinished)
      break;
      case this.sortingItemsTitle.ready: sortingItems = this.props.houses.filter(h => h.isReady)
      break;
      case this.sortingItemsTitle.all: sortingItems = this.props.houses;
      break;
      case this.sortingItemsTitle.new: sortingItems = this.props.houses.filter(h => h.isNew)
      break;
      case this.sortingItemsTitle.popular: sortingItems = this.props.houses.filter(h => h.isPopular)
      break;
      case this.sortingItemsTitle.inProcess: sortingItems = this.props.houses.filter(h => h.isInProcess)
      break;
      default :
      };
        return <div className={style.main}>  
            <h1> Наши проекты разрабатываются с любовью </h1>
            <div> <FilterMenu
                      onClickSort={this.onClickSort}
                      sorting={this.state.sorting}
                      houses={this.props.houses} /> </div>
            <div>          
            < HouseBlock
                    sortingItems={sortingItems}
                    sorting={this.state.sorting} 
                    houses={this.props.houses}/>
        </div>
        </div>
}
}

export default Portfolio