import React, { Component } from 'react';
import CarsPage from "./containers/CarsPage";
import CarCard from "./components/CarCard"


class App extends Component {
  state={
    cars: [],
  }

  componentDidMount = () => {
           fetch('http://localhost:3000/api/v1/listings')
       .then(res => res.json())
       .then(data =>
        this.setState({
           cars: data
       }))
  }

  render() {
    return (
      <div className="App">
        <CarsPage
          cars={this.state.cars}
          />
      </div>
    );
  }
}

export default App;