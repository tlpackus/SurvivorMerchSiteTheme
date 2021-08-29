import React from "react";
import SurvivalItem from "./SurvivalItem.js"
import PropTypes from "prop-types";

function GearList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.gearList.map((survivalItem, index) =>
        <SurvivalItem 
        name={survivalItem.name}
        description={survivalItem.description}
        quantity={survivalItem.quantity}
        cost={survivalItem.cost}
        key={index}/>
      )}
    </React.Fragment>
  );
}

GearList.propTypes = {
  gearList: PropTypes.array
};

export default GearList;