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
            filtered: [],
        };
    }

    getKeywords = event => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter(item => {
            return item.title.indexOf(keywords) > -1;
        });
        this.setState({
            filtered,
        });
    };

    render() {
        const { news, footerText, filtered } = this.state;

        return (
            <>
                <Header keywords={this.getKeywords} />
                <NewsList news={filtered.length === 0 ? news : filtered} />
                <Footer footerText={footerText} />
            </>
        );
    }
}

export default App;
