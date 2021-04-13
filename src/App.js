// import "./css/App.css";
import React, { Component } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import NewsList from "./components/news_list";
import JSON from "./db.json";

class App extends Component {
    constructor() {
        super();
        this.state = {
            news: JSON,
            footerText: "© 2021 by Azlan.Wonderwise",
        };
    }

    render() {
        const { news, footerText } = this.state;
        return (
            <>
                <Header />
                <NewsList news={news} />
                <Footer footerText={footerText} />
            </>
        );
    }
}

export default App;
