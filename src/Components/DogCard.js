import React from "react";

class DogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      barking: ""
    }
  }


  bark = () => {
    if (this.state.barking === "") {
      this.setState({
        barking: "Ruff!"
      })
    } else {
      this.setState({
        barking: ""
      })
    }
  }

  
  render() {
    return (
      <div>
        <h2>{this.props.dogInfo.name}</h2>
        <h2 className="bark">{this.state.barking}</h2>
        <img alt="Dog" src={this.props.dogInfo.img} />

        <button onClick={this.bark}>Bark</button>
      </div>
    );
  }
}

export default DogCard;
