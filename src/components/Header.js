import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { Link, BrowserRouter, Route } from 'react-router-dom';
=======
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
>>>>>>> 53e32c7113f232980407f2dd2ebcc6e34c41e318
import { connect } from 'react-redux';
import '../style/style.css';
import Home from './Home';






import '../style/style.css';

class Header extends Component {
  
  state = {
    hello : "hello"
  };

    renderContent() {
      
        
        return (  <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="account_man"  className="nav-link">Account Manager</Link>
        </li>
        <li className="nav-item">   
          <Link to="wish_list" className="nav-link">Wish List</Link>
        </li>

        <li className="nav-item">
          <Link to="mortgage" className="nav-link">Mortgage</Link>
        </li>
      </ul>);

class Header extends Component {

    renderContent() {
      console.log("name is : ",this.props.name);
      
        if(this.props.user) {
          return (  <ul className="navbar-nav mr-auto">
          <li className="nav-item navBar">
            <Link to="account_man"  className="nav-link">Account Manager</Link>
          </li>
          <li className="nav-item navBar">   
            <Link to="wish_list" className="nav-link">Wish List</Link>
          </li>
  
          <li className="nav-item navBar">
            <Link to="mortgage" className="nav-link">Mortgage</Link>
          </li>


          <li className="nav-item navBar">
            <Link to="edit_details" className="nav-link">Edit Personals Details</Link>
          </li>


          <div className="btn-group right navBar">
            <button type="button" className= "btn btn-primary dropdown-toggle right_with" data-toggle="dropdown" aria-haspopup="true">
              Hello {this.props.user.email}
            </button>
            <div className="dropdown-menu ">
              <Link to="logout" className="dropdown-item" >Logout</Link>
            </div>
          </div>

        </ul>);

        }else{
          return (<div className="btn-group ButtonBar ">
          <button type="button" className= "btn btn-danger dropdown-toggle  " data-toggle="dropdown" aria-haspopup="true">
            Login
          </button>
          <div className="dropdown-menu ButtonBar ">
            <Link to="login" className="dropdown-item " >Login</Link>
            <div className="dropdown-divider"></div>
            <Link to="register" className="dropdown-item" >Register</Link>
          </div>
        </div> );
        }

  

    }
    

    render() {
      if(this.props.user){
        console.log("user in header is : ",this.props.user.email);
        
       }

        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" >Home</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                  {this.renderContent()}
                  <div className="btn-group">
                  <button type="button" className="{}btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true">
                    Sign-In

                  {/* <div className="btn-group">
                  <button type="button" className={ (this.props.user ? 'btn btn-success dropdown-toggle' : 'btn btn-danger dropdown-toggle')} data-toggle="dropdown" aria-haspopup="true">
                   {this.props.user ? " hello " + this.props.name : "Login"}
                  </button>
                  <div className="dropdown-menu ">
                    <Link to="login" className="dropdown-item" >Login</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="register" className="dropdown-item" >Register</Link>
                  </div>
                </div>
                </div> */}
                
                  
                </div>
              </nav>
            </div>
               
        );

    }
    
}

export default Header;
const mapStateToProps = (state) => {

  return{
    user: state.auth.user,
    name: state.auth.name
  };
  



};

export default connect(mapStateToProps)(Header);
