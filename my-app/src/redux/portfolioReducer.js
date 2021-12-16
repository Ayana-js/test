const SET_HOUSES = 'SET_HOUSES'

let initialState = {
    houses: [
        {id: 1, name: 'MANHATTAN HOUSE', address: 'Тыныстанова 37а',  
        isFinished: false,
        isReady: true,
        isPopular: false,
        isNew: false,
        isInProcess: true},
        {id: 1, name: 'GREEN-PARK', address: 'Тыныстанова 37а', 
        isFinished: false,
        isReady: false,
        isPopular: true,
        isNew: false,
        isInProcess: false},
        {id: 1, name: 'АРИСТОКРАТ', address: 'Тыныстанова 37а', 
        isFinished: false,
        isReady: true,
        isPopular: true,
        isNew: false,
        isInProcess: true},
        {id: 1, name: 'DELUXE', address: 'Тыныстанова 37а',
        isFinished: false,
        isReady: false,
        isPopular: true,
        isNew: false,
        isInProcess: false},
        {id: 1, name: 'АСАНБАЙ', address: 'Тыныстанова 37а',
        isFinished: true,
        isReady: false,
        isPopular: true,
        isNew: false,
        isInProcess: false},
        {id: 1, name: 'ТУНГУЧ', address: 'Тыныстанова 37а',
        isFinished: false,
        isReady: true,
        isPopular: false,
        isNew: true,
        isInProcess: false},
        {id: 1, name: 'КОК-ЖАР', address: 'Тыныстанова 37а',
        isFinished: false,
        isReady: false,
        isPopular: false,
        isNew: true,
        isInProcess: true}
    ],
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {       
        case SET_HOUSES: 
            return {
                ...state,
                houses: action.houses
            }
        default:
            return state
    }
}

export const setHouses = (houses) => ({
    type: SET_HOUSES,
    houses: houses
})

export default portfolioReducer