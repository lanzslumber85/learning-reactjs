import React, { Component } from "react";
import "../css/header.css";

class Header extends Component {
    state = {
        keywords: "",
    };

    inputChange = event => {
        this.setState({
            keywords: event.target.value,
        });
    };

    render() {
        return (
            <header className="header">
                <div className="logo">Logo:</div>
                <input onChange={e => this.inputChange(e)} />
            </header>
        );
    }
}

export default Header;
