import React, { Component } from 'react';
import { withRouter } from "react-router";
import Auth from '../../apis/Auth';
import { Link } from 'react-router-dom';

class Login extends Component
{
    constructor(props)
    {
        super(props);
        document.body.classList.remove("sidebar-mini"); //add by Alex Kanga
        document.body.classList.remove("layout-fixed"); //add by Alex Kanga
        document.body.classList.add("login-page");

        this.state = {
            email: "",
            password: "",
            error_message: null,
            errors: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEmail = this.handleEmail.bind(this);

        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            error_message: null,
            errors: null
        });

        if(this.state.email == "" || this.state.password == "") {
            this.setState({
                error_message: "Veuillez entrer vos identifiants"
            });

            return false;
        }

        Auth.login({email: this.state.email, password: this.state.password}, (response) => {
            if(response.data.user.is_admin == 1) {
                for (var i in response.data.user) {
                    localStorage.setItem("user." + i, response.data.user[i]);

                    setTimeout(() => {
                        this.props.history.push("/");
                    }, 500);
                }
            } else {
                localStorage.clear();

                this.setState({
                    error_message: "Unauthorized"
                });
            }
        }, (err) => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });
    }

    render() {
        return (
                <div className="login-box">
  <div className="login-logo">
    <Link to="#"><b>Backend</b>LTE</Link>
  </div>

  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Entrer vos paramètres de connexion</p>
      {
          this.state.error_message?(<div className="alert alert-danger" style={{textAlign:"center"}}>{this.state.error_message}</div>):null
      }
      <form action="#" method="post" onSubmit={this.handleSubmit}>
        <div className={`input-group mb-3 ${this.state.errors && this.state.errors.email?'has-error':''}`}>
            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handleEmail} value={this.state.email} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
              {
                  this.state.errors && this.state.errors.email?(<div className="help-block">{this.state.errors.email[0]}</div>):null
              }
            </div>
          </div>
        </div>
        <div className={`input-group mb-3 ${this.state.errors && this.state.errors.password?'has-error':''}`}>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handlePassword} value={this.state.password} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
              {
                  this.state.errors && this.state.errors.password?(<div className="help-block">{this.state.errors.password[0]}</div>):null
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Mémoriser
              </label>
            </div>
          </div>

          <div className="col-5">
            <button type="submit" className="btn btn-secondary btn-block">Connexion</button>
          </div>

        </div>
      </form>

      <div className="social-auth-links text-center mb-3">
        <p>- OU -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Se connecter via Facebook
        </a>
        <a href="#" className="btn btn-block btn-info">
          <i className="fab fa-google-plus mr-2"></i> Se connecter via Google+
        </a>
      </div>

      <p className="mb-1">
        <Link to="#">Mot de passe oublié</Link>
      </p>
      <p className="mb-0">
        <Link to="#" className="text-center">Créer un compte</Link>
      </p>
    </div>

  </div>
</div>


        )
    }
}

export default withRouter(Login);
