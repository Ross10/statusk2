import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import Spinner from './Spinner';
import Home from './Home'; 


class Login extends Component {

    componentDidUpdate() {
        if(this.props.user) {
            this.props.history.push('/');
        }
    }


    onEmailChange(event) {
        this.props.emailChanged(event.target.value);
        //  console.log("email : ",this.props.email);
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value);
        //  console.log("Password",this.props.password);
    }

    loginUser() {
        //Just the added one!
        const { email, password } = this.props;
        this.props.loginUser(email,password);
    
    }


    buttonOrSpinner() {
        console.log("loading is : ", this.props.loading);
        if(this.props.loading) {
            return <Spinner />
        }else{
          
            return  <button  onClick={this.loginUser.bind(this)} className="btn btn-lg btn-primary btn-block" >Submit</button>
        }

        
      
        
    }

    render() {

        return (
            <div className="container centro"> 
                <div className="wrapper">
                    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
                    <form className="form-signin">

                    <div className="form-group">
                            <label>Email Address</label>
                            <input className="form-control" type="email" placeholder="example@gmail.com" autoFocus="" />     
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                    </form>
                </div>

                            <input value={this.props.email} onChange={this.onEmailChange.bind(this)} className="form-control" type="email" placeholder="example@gmail.com" autoFocus="" />     
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input value={this.props.password} className="form-control" onChange={this.onPasswordChange.bind(this)} type="password" placeholder="Password" />
                    </div>

                    {this.buttonOrSpinner()}
                    </form>
                </div>

                {console.log("user in login is : ",this.props.user)}
               
               {/* will work wwhen clicking on the "click here" */}
                {/* <Link to= '/' >
                click here
                </Link> */}
                {/* <Link to={this.props.user ? '/' : '/login'} > */}
                
                {/* {this.props.user ? this.props.history.push('/') : '' } */}

            </div>
               
        );

    }
    
}

export default Login;
const mapStateToProps = ({auth}) => {
    
   
     return { email:auth.email,
              password: auth.password,
              r_password: auth.r_password,
              name: auth.name,
              loading: auth.loading,
              user: auth.user,
              error: auth.error
             };
   };
 

export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(Login);
