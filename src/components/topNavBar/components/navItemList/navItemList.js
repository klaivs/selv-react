import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { navItems: state.navItems };
};

const connectedList = ({ navItems }) => (
    <ul className="navbar-nav mr-auto">
        {navItems.map(el => (
            <li className="nav-item" key={el.id}>
                <a className="nav-link" href={el.path}>{el.name}</a>
            </li>
        ))}
    </ul>
);

const NavItemList = connect(mapStateToProps)(connectedList);

export default NavItemList;