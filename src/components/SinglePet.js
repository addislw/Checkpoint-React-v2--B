import React from 'react';
import DeletePet from './DeletePet';
import axios from 'axios';

class SinglePet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adopted: false
    }

    this.deletePet = this.deletePet.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    // this.setState({adopted: !this.props.adopted});
    this.props.onChange(!this.props.adopted); 
  }

  async deletePet(petId) {
    try {
      await axios.delete(`/api/pets/${petId}`);
    } catch (err) {
      console.error(err);
    }
  }

  /*
  componentDidUpdate(prevProps) { 
    console.dir(prevProps); 
    if (this.props.adopted !== prevProps.adopted) {
      let element = document.getElementById(String(this.props.pet.name));
      if (element) {
        if (element.className === 'single-pet') {
          element.className = 'single-pet adopted';
        } else {
          element.className = 'single-pet';
        }
      }
    }
  }
  */


  render() {
    return (
      <div id={this.props.pet.name} className="single-pet">
        <p>Name: {this.props.pet.name} </p>
        <p>Description: {this.props.pet.description}</p>
        <p>Species: {this.props.pet.species}</p>
      
        <p>{this.state.adopted ? 'Adopted!' : 'Available'}</p>
        <button onClick={this.changeStatus}>Toggle Status</button>
        <DeletePet petId={this.props.pet.id} deletePet={this.deletePet}/>
      </div>
    )
  }
}

export default SinglePet;
