import React from "react";
import { Route, Link, withRouter } from 'react-router-dom';

const RecursiveColorSwatch = ({match}) => {

    const color = match.params.color;
    const text = match.params.text;

    let style = {
        backgroundColor: color,
        textAlign: 'center',
        padding: 20,
        margin: 15
    }

    return (
        <div style={style}>
            <h2>{text}</h2>
            <h3>{match.path}</h3>
            <h4>
                <Link to={`${match.url}/ececec/Child`}>Add Child</Link>
                {' | '}
                <Link to={`${match.url}`}>Close Child</Link>
            </h4>
            <Route path={`${match.url}/:color/:text`} component={RecursiveColorSwatch} />
        </div>
    );
}

export default RecursiveColorSwatch;