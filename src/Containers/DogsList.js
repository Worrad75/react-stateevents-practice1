import React, { Component } from "react";
import DogCard from "../Components/DogCard";


class DogList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dogs: []
    }
    this.getDogs()
  }

  getDogs =()=> {
    fetch(`http://localhost:4000/dogs`)
    .then(resp => resp.json())
    .then(data => this.setState({
      dogs: data })
    )
  }


  render() {
    return (
      <div
        className="dogContainer">
        {this.state.dogs.map(dog => <DogCard key={dog.id} dogInfo={dog}/>)}
      </div>
    )
  }
}

export default DogList;
