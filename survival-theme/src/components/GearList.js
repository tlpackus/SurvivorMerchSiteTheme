import React from "react";
import SurvivalItem from "./SurvivalItem.js"
import PropTypes from "prop-types";

function GearList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.gearList.map((survivalItem) =>
        <SurvivalItem 
        whenSurvivalItemClicked = { props.onSurvivalItemSelection}
        name={survivalItem.name}
        description={survivalItem.description}
        quantity={survivalItem.quantity}
        cost={survivalItem.cost}
        id={survivalItem.id}
        key={survivalItem.id}/>
      )}
    </React.Fragment>
  );
}

GearList.propTypes = {
  gearList: PropTypes.array,
  onSurvivalItemSelection: PropTypes.func
};

export default GearList;