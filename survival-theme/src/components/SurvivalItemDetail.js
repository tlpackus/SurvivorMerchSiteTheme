import React from "react";
import PropTypes from "prop-types";

function SurvivalItemDetail(props){

  function handleBuy(event) {

    event.preventDefault();
    if ((props.survivalItem.quantity - event.target.quantity.value) >= 1) {
      props.buyButtonClick({
        name: props.survivalItem.name, description: props.survivalItem.description, quantity: props.survivalItem.quantity - event.target.quantity.value,
        cost: props.survivalItem.cost, id: props.survivalItem.id
      });
    } else {
      props.buyButtonClick({
        name: props.survivalItem.name, description: props.survivalItem.description, quantity: "sold out",
        cost: props.survivalItem.cost, id: props.survivalItem.id
      });
    }
    
  }
  
  return (
    <React.Fragment>
      <h1>Survival Item Detail</h1>
      <h3>{props.survivalItem.name}</h3>
      <p>{props.survivalItem.description}</p>
      <p>{props.survivalItem.quantity}</p>
      <p>{props.survivalItem.cost}</p>
      <div>
        <form onSubmit={handleBuy}>
          Quantity you want:
          <input type='number' name='quantity' placeholder='Quantity'></input>
          <button type='submit'>Buy!</button>
        </form>
      </div>
      <hr/>
    </React.Fragment>
  );
}

SurvivalItemDetail.propTypes = {
  survivalItem: PropTypes.object,
  buyButtonClick: PropTypes.func
};

export default SurvivalItemDetail;
