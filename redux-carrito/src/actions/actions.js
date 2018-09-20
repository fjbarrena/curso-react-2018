export function getArticles() {
    return {
        type: "GET_ARTICLES",
        payload: {}
    };
}

export function addArticle(article) {
    return {
        type: "ADD_ARTICLE",
        payload: {
            articleToAdd: article
        }
    };
}

export function deleteArticle(article) {
    return {
        type: "DEL_ARTICLE",
        payload: {
            articleToDel: article
        }
    }
}