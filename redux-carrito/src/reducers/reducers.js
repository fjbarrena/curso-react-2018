import { combineReducers } from "redux";

function getArticlesReducer(state = [], action) {
    switch(action.type) {
        case "GET_ARTICLE":
            console.log("EJECUTANDO GET_ARTICLES REDUCER");
            return state;
        default:
            return state;
    }
}

function addArticleReducer(state = [], action) {
    switch(action.type) {
        case "ADD_ARTICLE":
            console.log("EJECUTANDO ADD_ARTICLES REDUCER");
            return state;
        default:
            return state;
    }
}

function delArticleReducer(state = [], action) {
    switch(action.type) {
        case "DEL_ARTICLE":
            console.log("EJECUTANDO DEL_ARTICLES REDUCER");
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    getArticlesReducer,
    addArticleReducer,
    delArticleReducer
});

export default reducers;