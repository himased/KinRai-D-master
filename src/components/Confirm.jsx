import React, { Component } from 'react'
import Result from './Result'

export default class Random extends Component {
    
    state = {
        list: this.props.list,
        hate: this.props.hate,
        now: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render(){

        return (
            
            <div className="container mt-4 mb-5">
            <section className="section container">
            <div><Result now={this.state.now}/></div>
                <form id="confirm_form" onSubmit={this.onSubmit}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Accept</button>
                                    </div>
                                </div>

                </form>
            
            </section>
            
            </div>
        )
    }
    
}
