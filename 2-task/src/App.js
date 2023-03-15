import React from "react";
import './App.sass';
import Header from "./components/Header/header";
import Circle from "./components/Circle/circle";
import MainContent from "./components/MainContent/mainContent";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Circle/>
            <MainContent/>
            <Footer/>
        </div>

    );
}

export default App;
