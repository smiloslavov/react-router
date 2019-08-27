import React from "react";
import { Route } from 'react-router-dom';

const LoggingRoute = ({component: ComponentToRender, ...rest}) => {
    return(
        <Route 
            {...rest}
            render={ (props) => {
                //custom code to execute every time this route is activated
                alert('Route is logging ' + props.match.params.eid + ', current path: ' + props.match.path);
                return <ComponentToRender {...props} />
            }}
        >
        </Route>);
};

export default LoggingRoute;