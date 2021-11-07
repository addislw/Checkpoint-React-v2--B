import React from 'react';
import axios from 'axios';

const DeletePet = (props) => {
  const { deletePet, petId } = props;

  async function newFunc() {
    try {
      await axios.delete(`/api/pets/${petId}`);
      // deletePet undefined and throwing error
      deletePet(petId);
    } catch (error) {
      console.log('Something went wrong');
    }
  }

  return (
    <button onClick={newFunc} className="delete-pet">
      Delete
    </button>
  );
};

export default DeletePet;
