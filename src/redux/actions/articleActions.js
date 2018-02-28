import { articleConstants } from "./actionConstants";
import { toastr } from 'react-redux-toastr'

export const articleActions = {
    addArticle
};

function addArticle(article) {
    toastr.success('Success', 'Article was successfully created!');
    return {
        type: articleConstants.ADD_ARTICLE,
        article: article
    };
}