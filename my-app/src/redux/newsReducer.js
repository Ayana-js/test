import newsImg1 from '../img/news1.jpg'
// import newsImg2 from '../img/news2'
// import newsImg3 from '../img/news3'
// import newsImg4 from '../img/news4'
// import newsImg5 from '../img/news5'

const SET_NEWS = 'SET_NEWS'

let initialState = {
    news: [
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' },
        {id:1, img: {newsImg1}, title: 'Объявление о Тендере', date: '21 сентября 2021г.' }
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {       
        case SET_NEWS: 
            return {
                ...state,
                news: action.news
            }
        default:
            return state
    }
}

export const setHouses = (news) => ({
    type: SET_NEWS,
    news: news
})


export default newsReducer