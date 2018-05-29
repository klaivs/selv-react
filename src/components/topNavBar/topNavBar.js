import React from 'react';
//resources
import logo from '../../images/logo.svg';
import './topNavBar.css';

const navItems = [
    {id: 1,  name: "Home", path: "/#/" },
    {id: 2, name: "About", path: "/#/about" },
    {id: 3, name: "Test form", path: "/#/testForm" },
    {id: 4, name: "Test articles", path: "/#/testArticles" }
];

class TopNavBar extends React.Component {
    render() {
        //console.log(process.env);
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="navbar-brand" href="/#/" id="webPageTitle">SE.lv</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        {navItems.map(el => (
                            <li className="nav-item" key={el.id}>
                                <a className="nav-link" href={el.path}>{el.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="float-left">
                        <app-usermenu></app-usermenu>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNavBar;

