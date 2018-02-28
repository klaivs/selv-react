import React from 'react';

import './loginForm.css';
import facebook_logo from '../../images/facebook.svg';
import google_logo from '../../images/google.png';

class LoginForm extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col">
                    <form class="form-signin" name="loginForm">
                        <h2 class="form-signin-heading">Please sign in</h2>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required />
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" />
                                <span> Remember me</span>
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
                <div class="col">
                    <h2>Or ...</h2>
                    <a class="button auth-facebook ng-isolate-scope">
                        <img class="icon" src={facebook_logo} /><span> Log in with Facebook</span>
                    </a>
                    <a class="button auth-google ng-isolate-scope" >
                        <img class="icon" src={google_logo} /><span> Log in with Google</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default LoginForm;