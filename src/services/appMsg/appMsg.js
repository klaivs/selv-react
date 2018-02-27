import React from 'react';
import { connect } from "react-redux";
import './appMsg.css';

const mapStateToProps = state => {
    //console.log(state.articles);
    if (state.msg.items) {
        return { msg: state.msg.items };
    }
    return { msg: [] };
};

const connectedList = ({ msg }) => {
    console.log(msg);
    return (
        <div className="msgDiv">
            {msg.map(el => (
                <div key={el.id} className={el.className} role="alert" id="msg_div" >
                    <span><strong>{el.title}</strong> {el.message}</span>
                </div >
            ))}
        </div >
    );
}

const AppMsg = connect(mapStateToProps)(connectedList);

export default AppMsg;