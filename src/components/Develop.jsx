import React, { Component } from 'react'
import chian from '../img/chain.jpg'
import { Link } from 'react-router-dom';
import nick from '../img/nick.jpg'
import palm from '../img/palm.jpg'

export default class Register extends Component {

    render(){
      return (

            <section className="main" >
                <br/>
            <div align="center"><h1 id="pages">Developers</h1></div>
                    <table align="center" >
                        <tr>
                            <td align="center" id="name">
                            <img src={nick} alt="" width="150"/><br/>
                               <a href="https://www.facebook.com/jirayus.kardviset.5" id="black-click" target="_blank">Jirayus Kardviset </a> <br/> 610610575
                            </td>
                            <td align="center" id="name">
                            <img src={chian} alt="" width="150"/><br/>
                            <a href="https://www.facebook.com/himased" id="black-click" target="_blank">Chanakan Chaiwong </a>
                                 <br/> 610610576
                            </td>
                            <td align="center" id="name">
                            <img src={palm} alt="" width="150"/><br/>
                            <a href="https://www.facebook.com/palmmy.tonpalm" id="black-click" target="_blank">Nattha Chaiyarin </a>
                                 <br/> 610610580
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <div align="center"><Link to="/KinRai-D/" id="Link">
                                Back to Login
                    </Link> </div>
                    
                            <br/>

                </section>

        )
    }
}
