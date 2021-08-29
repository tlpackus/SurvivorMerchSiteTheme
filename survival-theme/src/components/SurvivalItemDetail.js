import React from "react";
import PropTypes from "prop-types";

function SurvivalItemDetail(props){
  const { survivalItem } = props;
  
  return (
    <React.Fragment>
      <h1>Survival Item Detail</h1>
      <h3>{survivalItem.name}</h3>
      <p>{survivalItem.description}</p>
      <p>{survivalItem.quantity}</p>
      <p>{survivalItem.cost}</p>
      <hr/>
    </React.Fragment>
  );
}

SurvivalItemDetail.propTypes = {
  survivalItem: PropTypes.object
};

export default SurvivalItemDetail;