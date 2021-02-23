import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
//  Partials
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import SidebarContent from './components/partials/SidebarContent';
import Footer from './components/partials/Footer';
//  Partials
import Routes from './Routes';

class App extends Component {
    render() {
        return (
          <Router>
          <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Routes/>
            <SidebarContent/>
            <Footer/>
          </div>
          </Router>

        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
