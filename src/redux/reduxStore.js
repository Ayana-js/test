import {createStore, combineReducers} from 'redux'
import newsReducer from './newsReducer'
import portfolioReducer from './portfolioReducer'

let reducers =  combineReducers ({
    portfolio: portfolioReducer,
    news: newsReducer
})

let store = createStore(reducers)

export default store