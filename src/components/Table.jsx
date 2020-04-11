import React, {Component} from 'react'

export default class Table extends Component {
    render(){

    const his = this.props.his

    var i
    for(i=0;i<his.length;i++){
        let button = document.createElement("div")
        button.innerHTML = his[i] + "<br/>"
        document.getElementById("list").appendChild(button)
    }

    return (
        <div>
        <h1 id="black">History</h1>

        <div id="list"></div>

        </div>
    )

    }

}