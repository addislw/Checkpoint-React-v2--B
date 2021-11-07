import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      stat: 'Loading...',
      allPets: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/pets');
      this.setState({
        allPets: res.data
      })
      console.log(res.data);
    } catch (err) {
      console.log(this.state.stat);
    }
  }


  render() {
    return (
      <>
        <h1>Adoption Center</h1>
        {this.state.allPets.length > 0 ? <PetList pets={this.state.allPets} />
        : <h1>{this.state.stat}</h1>}

      </>
    );
  }
}


export default Root;
