import React from "react";
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import authService from "../../services/authService";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: authService.isAuthenticated()
        }
    }

    render = () => {
        const {target} = this.props.location.state || {target: { pathname: '/private'}};

        if (this.state.loggedIn) {
            return <Redirect to={target} />;
        }

        return (
            <div>
                <h1>Sign In</h1>
                <Button className='btn btn-primary' onClick={this.login}>Sign In</Button>
            </div>
        );
    }

    login = () => {
        authService.signIn( () => {
            this.setState({
                loggedIn: authService.isAuthenticated()
            });
        });
    }
}

export default Login;