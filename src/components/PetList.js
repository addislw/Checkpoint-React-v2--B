import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'all',
    };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    let { pets, deletePet } = this.props;
    const { value } = this.state;
    pets = pets.filter((pet) => {
      if (value === 'all') return pet;
      if (value === 'cats') return pet.species === 'cat';
      if (value === 'dogs') return pet.species === 'dog';
    });
    return (
      <>
        <select value={this.state.value} onChange={this.change}>
          <option>all</option>
          <option>cats</option>
          <option>dogs</option>
        </select>

        <div className="pet-list">
          {pets.map((pet) => {
            return <SinglePet deletePet={deletePet} key={pet.id} pet={pet} />;
          })}
        </div>
      </>
    );
  }
}

export default PetList;
