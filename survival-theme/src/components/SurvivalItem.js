import React from "react";

function SurvivalItem(props){
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <p>{props.image}</p>
      <p><em>{props.description}</em></p>
      <p>{props.quantity}</p>
      <p>{props.cost}</p>
      <h3>Bear Grills Uses this!</h3>
      <hr/>
    </React.Fragment>
  );
}

SurvivalItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.image,
  description: PropTypes.string,
  quantity: PropTypes.number,
  cost: PropTypes.number
};

export default SurvivalItem;