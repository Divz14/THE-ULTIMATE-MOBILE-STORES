import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './SignIn.css';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {

        return (
          <div className=" BR ">
   <div className="justify-content-center align-items-center App" >
        
 <div className="App__Form  ">
   
         
          <div className="FormCenter">
          <div className="PageSwitcher">
 <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
 <NavLink  to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
 </div>


            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
              
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
              <NavLink to="/productlist" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
   
                  <button className="FormField__Button mr-20" onclick="Func()" >Sign In</button> 
                  </NavLink>
                  
              </div>
              <div className="FormField">
              <NavLink to="/admin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
   
                  <button className="FormField__Button mr-20" onclick="Func()" >Admin</button> 
                  </NavLink>
                  
              </div>
              <div className="FormTitle">
                
                  </div>
            </form>
           
          </div>
            </div>
            </div>
            </div>
      
         
        );
    }
    
}

export default SignInForm;
