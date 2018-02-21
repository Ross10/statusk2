import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Account_Manager from '../components/Account_Manager';
import Wish_List from '../components/Wish_list';
import Login from '../components/Login';
import Register from '../components/Register';
import Mortgage from '../components/Mortgage';
import Edit_Details from '../components/Edit_Details';




import '../firebase';



class App extends Component {


    render() {
        return (
            <div className="container">
            
                    <div>
                        <Header />
                      
                            <Route exact path="/" component = { Home }   />
                            <Route exact path="/account_man" component = { Account_Manager }  />
                            <Route exact path="/wish_list" component = { Wish_List }  />
                            <Route exact path="/login" component = { Login }  />
                            <Route exact path="/register" component = { Register }  />
                            <Route exact path="/mortgage" component = { Mortgage }  />
                            <Route exact path="/edit_details" component = { Edit_Details }  />
                            
                       
                        
                             
                    </div>
                    
              
            </div>
        );
    }
}

export default App;