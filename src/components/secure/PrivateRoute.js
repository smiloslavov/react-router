import React from "react";
import { Redirect, Route } from 'react-router-dom';
import authService from "../../services/authService";

const PrivateRoute = ({component: ComponentToRender, ...rest}) => {
    return(
        //<Redirect to='/login' />
        <Route 
            {...rest}
            render={ (props) => {
                //custom code to execute every time this route is activated
                //alert('Route is logging ' + props.match.params.eid + ', current path: ' + props.match.path);
                return authService.isAuthenticated()
                    ? <ComponentToRender {...props} />
                    : <Redirect to={
                        {
                            pathname: '/login',
                            state: {target: props.location}
                        }
                    } />
            }}
            
        >
        </Route>
        );
};

export default PrivateRoute;