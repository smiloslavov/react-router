import React from 'react';
import { Route } from 'react-router-dom';
import LoggingDefaultMessage from './LoggingDefaultMessage';
import LoggingLink from './LoggingLink';
import LoggingRoute from './LoggingRoute';

const LoggingHome = ({match}) => {
    return (
        <div>
           <h1>Logging Home</h1> 
           <h4>
               <LoggingLink to={`${match.url}/lorem/123456`}>Link 1</LoggingLink>
               {' | '}
               <LoggingLink to={`${match.url}/lorem/654321`}>Link 2</LoggingLink>
           </h4>

           <LoggingRoute path={`${match.url}/lorem/:eid`} component={LoggingDefaultMessage} />
           <Route path={`${match.url}`} component={LoggingDefaultMessage} exact />
        </div>
    );
}
export default LoggingHome;