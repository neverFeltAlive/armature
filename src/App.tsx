import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Conditions from "./components/Conditions/Conditions";
import Slider from "./components/Slider/Slider";
import Schema from "./components/Schema/Schema";

function App() {
    return (
        <div className="App">
            <Header/>

            <Schema/>
            <Menu/>
            <About/>
            <Slider/>
            <Conditions/>
            <Contacts/>

            <Footer/>
        </div>
    );
}

export default App;
