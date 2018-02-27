import { articleConstants } from "./actionConstants";

export const articleActions = {
    addArticle
};

function addArticle(article) {
    return { type: articleConstants.ADD_ARTICLE, article: article };
}