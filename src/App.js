import {BrowserRouter as Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import "./index.css"
import Header from './components/Header'
import Home from "./components/Home"
import Book from "./components/Book"
import GetTix from "./components/GetTickets"
import Account from "./components/Account"
import Search from "./components/Search"

function App() {


    return (
        <BrowserRouter>
            <Header />
            <div className="pl-20">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/book' component={Book} />
                    <Route exact path='/tickets' component={GetTix} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/account' component={Account} />

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
