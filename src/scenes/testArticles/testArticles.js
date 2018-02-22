import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const connectedList = ({ articles }) => (
    <div>
        <h2>A list of created articles</h2>
        <ul className="list-group list-group-flush">
            {articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
    </div>
);

const TestArticles = connect(mapStateToProps)(connectedList);

export default TestArticles;