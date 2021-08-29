import React from "react";
import { v4 } from 'uuid';  
import PropTypes from "prop-types"; 

function NewSurvivalItemForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewSurvivalItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        <input
          type='number'
          name='cost'
          placeholder='Cost' />
        <button type='submit'>Add item to marketplace</button>
      </form>
    </React.Fragment>
  )
  function handleNewSurvivalItemFormSubmission(event) {
    event.preventDefault();
    props.onNewSurvivalItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), cost: parseInt(event.target.cost.value), id: v4()});
  }
}

NewSurvivalItemForm.propTypes = {
  onNewSurvivalItemCreation: PropTypes.func
};

export default NewSurvivalItemForm;