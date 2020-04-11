import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.meal}</td>
      <td>
        <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )

export default class MealList extends Component{

    state = {
        username: this.props.username
    }
   
    

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this)

        this.state = {exercises: []};

    }

    onChangeUsername(e) {
        this.setState({
          username: this.state.username
        }) 
      }

    componentDidMount() {
        
        
        axios.get('http://localhost:5000/exercises/', this.state.username  )
          .then(response => {
            this.setState({ exercises: response.data })
            console.log(this.state.username)
          })
          .catch((error) => {
            console.log(error);
          })
      }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
      }
    
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
      }

    render() {
        return (
            <div>
                <h3>Meals List</h3>
        <table className="table" id = "table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Meal</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        <Link to="/KinRai-D" id="Link">
                                Back to Sign in
                                </Link>
            </div>
        )
    }
}