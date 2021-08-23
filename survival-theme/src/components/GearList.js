import React from "react";
import SurvivalItem from "./SurvivalItem.js"

const masterGearList = [
  {
    name: "Survival Watch",
    description: "compass, watch, and fire starter",
    quantity:  "10",
    cost:  "5"
  },
  {
    name: "First Aid Kit",
    description: "All first aid necessities",
    quantity:  "10",
    cost:  "10"
  }
];
function GearList(){
  return (
    <React.Fragment>
      <hr/>
      {masterGearList.map((survivalItem, index) =>
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

export default GearList;