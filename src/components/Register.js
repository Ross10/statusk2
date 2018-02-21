import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, r_passwordChanged, nameChanged, saveDatatoDB } from '../actions/index';
import * as firebase from 'firebase';
import Spinner from './Spinner';



class Register extends Component {


    onEmailChange(event) {
        this.props.emailChanged(event.target.value);
         console.log("email : ",this.props.email);
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value);
         console.log("Password",this.props.password);
    }

    onR_PasswordChanged(event) {
        this.props.r_passwordChanged(event.target.value);
        console.log("r_password",this.props.r_password);
    }

    onNameChanged(event) {
        this.props.nameChanged(event.target.value);
        console.log("name", this.props.name)
        // console.log("name", this.props.name)
    }

    saveClientData() {
        //Just the added one!
        const { email, password, user, name } = this.props;
        this.props.saveDatatoDB(email,password,name);
     

    }


    buttonOrSpinner() {
        console.log("loading is : ", this.props.loading);
        if(this.props.loading) {
            return <Spinner />
        }else{
            console.log("user",this.props.user);
            if(this.props.user) {
           
            
                
            }
            return  <button  onClick={this.saveClientData.bind(this)} className="btn btn-lg btn-primary btn-block" >Submit</button>
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
                            <input value={this.props.email} onChange={this.onEmailChange.bind(this)} className="form-control" type="email" placeholder="example@gmail.com" autoFocus="" />     
                    </div>

                    <div className="form-group">
                            <label>Name</label>
                            <input  value={this.props.name} onChange={this.onNameChanged.bind(this)} className="form-control" type="text" placeholder="Enter Your Name" />
                    </div>

                    <div className="form-group">
                            <label>Password</label>
                            <input  value={this.props.password} onChange={this.onPasswordChange.bind(this)} className="form-control" type="password" placeholder="Password" />
                    </div>

                    <div className="form-group">
                            <label>Repeat Password</label>
                            <input  value={this.props.r_password} onChange={this.onR_PasswordChanged.bind(this)} className="form-control" type="password" placeholder="Repeat Password" />
                    </div>



                   {this.buttonOrSpinner()}
                   
                    </form>
                </div>

            </div>
               
        );

    }
    
}

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

export default connect(mapStateToProps,{emailChanged, passwordChanged, r_passwordChanged, nameChanged, saveDatatoDB })(Register);
