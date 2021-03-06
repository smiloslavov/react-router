import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropViewer from './components/PropViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/color/ColorSwatch';
import LoggingHome from './components/logging/LoggingHome';
import ProtectedHome from './components/secure/ProtectedHome';
import PrivateRoute from './components/secure/PrivateRoute';
import Login from './components/secure/Login';
import Logout from './components/secure/Logout';
import SmartColorSwatch from './components/color/SmartColorSwatch';
import RecursiveColorSwatch from './components/color/RecursiveColorSwatch';
import Unicorn from './components/Unicorn';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className='rightContentContainer'>

                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path={'/unicorn'} component={Unicorn} />
                        <Redirect to='/unicorn' from='/pets' />
                        <Route path='/color/:text/:color' component={RecursiveColorSwatch} />
                        <Route path='/color/:text/:color' component={SmartColorSwatch} exact />
                        <Route path='/color' render = { () => {
                            return <ColorSwatch color='#ff0000' text='Red' />
                        }}
                        />
                        <Route path='/prompt' component={NameForm} exact />
                        <Route path='/props' component={PropViewer} exact />
                        <Route path='/logging' component={LoggingHome} />
                        <PrivateRoute path='/private' component={ProtectedHome} />
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={Logout} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>
            </div>
        </Router>
    );
};


export default App;