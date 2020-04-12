import React, { Component } from 'react'
import logo from '../img/Logo1.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
//import { response } from 'express';

export default class Register extends Component {
  
    state = {
        newuser:'',
        newpassword:'',
        confirm: ''
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    //check username ว่าซ้ำไหม + check password & confirm password ว่ารงกันไหม -> ไม่ตรง alert'Error' : ตรง alert'success'
    onSubmit = (e) => {
        e.preventDefault()
        
        if (!this.state.newpassword || !this.state.confirm || !this.state.newuser) {
            window.alert('Please fill data');
            return false;
        }else if(this.state.newpassword !== this.state.confirm){
                window.alert('Passwords are not matching')
                return false;
        }else{
            const user = {
                username: this.state.newuser,
                password: this.state.newpassword
            }

            

            console.log(user)

            axios.post('http://localhost:3000/users/add', user)
                .then(res => console.log(res.data))

            window.alert('Success, Please back to Login');
            this.setState({
                newuser:'',
                newpassword:'',
                confirm: ''
            })

        }
        
    }

    render(){
      return (
            <section className="section container">
                    <table align="center" id="login-form">
                        <tr>
                            <td align="center" width="60%">
                                <img src={logo} alt="" width="200"/>
                            </td>
                            <td>
                            <h1 id="pages">Register</h1>
                            <form id="register_form" onSubmit={this.onSubmit}>
                                
                                <div className="field">
                                    <label className="label" htmlFor="">New Username</label>
                                    <div className="control">
                                        <input className="input" type="text" name="newuser" onChange={this.onChange} value={this.state.newuser} placeholder="Enter username"></input>
                                    </div>
                                </div>
    
                                <div className="field">
                                    <label className="label" htmlFor="">New Password</label>
                                    <div className="control">
                                        <input className="input" type="password" name="newpassword" onChange={this.onChange} value={this.state.newpassword} placeholder="Enter password"></input>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" htmlFor="">Confirm Password</label>
                                    <div className="control">
                                        <input className="input" type="password" name="confirm" onChange={this.onChange} value={this.state.confirm} placeholder="Enter password"></input>
                                    </div>
                                </div>
    
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type="submit" className="button is-link" id="process">Submit</button>
                                    </div>
                                </div>

                            </form>
                            <br/>
                            <Link to="/KinRai-D-master/" id="Link">
                                Back to Login
                            </Link>
                            <br/>
                            <br/>
                            </td>
                        </tr>
                    </table>

                </section>
        )
    }
}
