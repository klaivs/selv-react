import React from 'react';

import FormErrors from '../formErrors/formErrors';

import './loginForm.css';
import facebook_logo from '../../images/facebook.svg';
import google_logo from '../../images/google.png';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleUserInput(oEvent) {
        const name = oEvent.target.name;
        const value = oEvent.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleSubmit(oEvent) {
        oEvent.preventDefault();
        const { title } = this.state;
        //const id = "";
        //this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    render() {
        return (
            <div class="row">
                <div class="col">
                    <form class="form-signin" name="loginForm">
                        <h2 class="form-signin-heading">Please sign in</h2>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" value={this.state.email} id="inputEmail" name="email" class="form-control" placeholder="Email address" required autofocus onChange={(oEvent) => this.handleUserInput(oEvent)} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" value={this.state.password} id="inputPassword" name="password" class="form-control" placeholder="Password" required onChange={(oEvent) => this.handleUserInput(oEvent)} />
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" />
                                <span> Remember me</span>
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" disabled={!this.state.formValid}>Sign in</button>
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