import React, { Component } from 'react'
import Result from './Result'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Random extends Component {
    
    state = {
        username: this.props.username,
        list: this.props.list,
        his: this.props.his,
        now: '',
        num: ''
    }

    onChangeUsername(e) {
        this.setState({
          username: this.state.username
        })
      }
      

      onSubmit = (e) => {
        e.preventDefault();
            document.getElementById("random_form").style.display = "none";
            document.getElementById("hate_form").style.display = "block";
            document.getElementById("confirm_form").style.display = "block";
            var rannum = Math.floor(Math.random()*this.state.list.length)
                this.setState({
                    now: this.state.list[rannum],
                    num: rannum
                })
                
            console.log(this.state.his)
        
    }

    comfirm = (e) =>{
        if(this.state.now){
            e.preventDefault()
            document.getElementById("random_form").style.display = "block";
            document.getElementById("hate_form").style.display = "none";
            document.getElementById("confirm_form").style.display = "none";
            window.alert('Enjoy your meal!')
            this.setState({
                his: this.state.his.concat(this.state.now)
            })
            const exercises = {
                username: this.state.username,
                meal: this.state.now
            }
            axios.post('http://localhost:5000/exercises/add', exercises)
              .then(res => console.log(res.data))
            window.alert('Enjoy your meal!')
        }  
    }

    

    

    render(){

        return (
            
            <div>
                <table>
                    <tr>
                        <td>
                        <section className="section container">
                        <div><Result now={this.state.now}/></div>
                            <br/>
                            <br/>
                            <form id="random_form" onSubmit={this.onSubmit}>
                
                                            <div className="field is-grouped" align="center">
                                                <div className="control" >
                                                    <button type="submit" className="button is-link" id="process">Random</button>
                                                </div>
                                            </div>

                            </form>
        
                            <form id="hate_form" onSubmit={this.onSubmit}>
                
                                            <div className="field is-grouped" align="center">
                                                <div className="control">
                                                    <button type="submit" className="button is-link" id="hate">I hate this dish</button>
                                                </div>
                                            </div>

                            </form> 
                            
                            <form id="confirm_form" onSubmit={this.comfirm}>
                
                                            <div className="field is-grouped" align="center">
                                                <div className="control">
                                                    <button type="submit" className="button is-link" id="con">I will have this dish</button>
                                                </div>
                                            </div>

                            </form>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br/>
                        
                        </section>
                        </td>
                        <Link to="/" id="Link">
                                HISTORIA
                                </Link>
                    </tr>
                </table>
            
            </div>
        )
    }
    
}