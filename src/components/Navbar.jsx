import React from 'react'
import { Link } from 'react-router-dom'
 
function Navbar(props) {
   return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">MealRandom</Link>
    <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
    <div className="buttons">

    <button className="button is-light"  onClick={props.logout}>
     {props.username},Logout
    </button>
    </div>
    </ul>
    </div>
  </nav>
   )
}
 
export default Navbar
