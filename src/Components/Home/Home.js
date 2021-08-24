import React from 'react';
import Header from "../header";
import Content from "./content";
import Footer from "../footer";

function Home(props) {
    return (
        <div className="App h-100">
            <Header/>
            <Content />
            <Footer />
        </div>
    );
}

export default Home;