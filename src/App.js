import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter, Switch} from 'react-router-dom';

import Header from './components/Header'
import Home from "./components/Home"
import Book from "./components/Book"
import GetTix from "./components/GetTickets"
import Settings from "./components/UserSettings"

function App() {

    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/book' component={Book} />
                <Route exact path='/tickets' component={GetTix} />
                <Route exact path='/settings' component={Settings} />
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;