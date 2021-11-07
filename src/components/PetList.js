import React from 'react';
import DeletePet from './DeletePet';
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
      pets: this.props.pets
    }
    this.change = this.change.bind(this);
    // this.onChange = this.onChange.bind(this); 
  }
  /*
  onChange(adoption) {
    this.setState({adopted: adoption})
  }
  */
  change(e) {
    // console.log(e.target.value); 
    this.setState({value: e.target.value});
    // console.log(this.state.value); 
  }

  static getDerivedStateFromProps(props, state) {
    return {value: state.value}; 
  }

  /*
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log('The previous value of SELECT was:', prevState.value); 
  }
  */

  componentDidUpdate(prevState) {
    // console.log('The previous value of SELECT was:', prevState.value); 
    // console.log('The current value of SELECT is:', this.state.value); 
  }
  
  /*
  componentDidUpdate(prevState) {
    if (this.state.value !== prevState.value) {
      if (this.state.value === 'all') {
        this.setState({pets: this.props.pets});
      } else if (this.state.value === 'cats') {
       this.setState({pets: this.props.pets.filter(pet => pet.species === 'cat')});
      } else {
        this.setState({pets: this.props.pets.filter(pet => pet.species === 'dog')});
      }
    }
  }
  */
  render() {
    return (
      <>
        <select id="view-options" value={this.state.value} onChange={this.change}>
          <option value="all">all</option>
          <option value="cats">cats</option>
          <option value="dogs">dogs</option>
        </select>
        <div className="pet-list">
          {this.state.pets.map(pet => {
            return (
              <SinglePet key={pet.id} pet={pet} />
            )
          })}
        </div>
      </>
    );
  }
}

export default PetList;