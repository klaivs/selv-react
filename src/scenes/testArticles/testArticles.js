import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log(state.articles);
    if (state.articles.items) {
        return { articles: state.articles.items };
    }
    return { articles: [] };
};

const connectedList = ({ articles }) => {
    console.log(articles);
    return (
        < div >
            <h2>A list of created articles</h2>
            <ul className="list-group list-group-flush">
                {articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        </div >
    );
}

const TestArticles = connect(mapStateToProps)(connectedList);

export default TestArticles;