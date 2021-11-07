import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.

// import samplePets from '../petdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      stat: null,
      pets: [],
      loading: true,
    };

    this.deletePet = this.deletePet.bind(this);
  }

  deletePet(petId) {
    this.setState((prevState) => ({
      pets: prevState.pets.filter((pet) => pet.id !== petId),
    }));
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/pets');
      this.setState({
        pets: res.data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        stat: err.message,
        loading: false,
      });
    }
  }

  render() {
    return (
      <>
        <h1>Adoption Center</h1>
        {this.state.stat && <div>Error: {this.state.stat}</div>}
        {this.state.loading && <div>Loading...</div>}

        <PetList pets={this.state.pets} deletePet={this.deletePet} />
      </>
    );
  }
}

export default Root;
