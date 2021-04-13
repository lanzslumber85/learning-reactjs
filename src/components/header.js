import React, { Component } from "react";
import "../css/header.css";

class Header extends Component {
    state = {};

    render() {
        const { keywords } = this.props;

        return (
            <header className="header">
                <div className="logo">Logo:</div>
                <input onChange={keywords} />
            </header>
        );
    }
}

export default Header;
