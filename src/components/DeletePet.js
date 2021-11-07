import React from 'react';
import axios from 'axios'; 

const DeletePet = (props) => {
  const deletePet = props.deletePet; 
  const petId = props.petId; 
  return (
    <button onClick={() => deletePet(petId)} className="delete-pet">Delete</button>
  )
};

export default DeletePet;
