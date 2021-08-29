import React from "react";
import PropTypes from "prop-types";

function SurvivalItem(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurvivalItemClicked(props.id)}>
        <h2>{props.name}</h2>
        <p>Description: <em>{props.description}</em></p>
        <p>Quantity: {props.quantity}</p>
        <p>Cost: {props.cost}</p>
        <h3>Bear Grills Uses this!</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

SurvivalItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  cost: PropTypes.number,
  id: PropTypes.string,
  whenSurvivalItemClicked: PropTypes.func
};

export default SurvivalItem;