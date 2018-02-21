import React from 'react';
import './topNavBar.css';
import logo from '../../logo.svg';
//import { Nav, Navbar } from 'reactstrap';

class TopNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="navbar-brand" href="/#/" id="webPageTitle">SE.lv</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#/about">About-us</a>
                        </li>
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

