import React from 'react';
import DeletePet from './DeletePet';
import axios from 'axios';

class SinglePet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      adopted: false,
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    this.setState((prevState) => ({ adopted: !prevState.adopted }));
  }

  render() {
    const { deletePet } = this.props;
    const { id, name, description, species } = this.props.pet;
    const { adopted } = this.state;
    return (
      <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Species: {species}</p>
        <p>{adopted ? 'Adopted!' : 'Available'}</p>

        <button onClick={this.changeStatus}>Toggle Status</button>
        <DeletePet petId={id} deletePet={deletePet} />
      </div>
    );
  }
}

export default SinglePet;
