import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './store/reducers/RootReducer';

//  Partials
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import SidebarContent from './components/partials/SidebarContent';
import Footer from './components/partials/Footer';
//  Partials
import Routes from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <Router>
              <div className="wrapper">
                  <Header/>
                  <Sidebar/>
                  <Routes/>
                  <SidebarContent/>
                  <Footer/>
              </div>
            </Router>
        </Provider>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
