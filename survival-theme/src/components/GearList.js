import React from "react";
import SurvivalItem from "./SurvivalItem.js"

function GearList(){
  return (
    <React.Fragment>
      <SurvivalItem 
      name="Survival Watch"
      description="compass, watch, and fire starter"
      quantity= "10"
      cost= "5" />
    <SurvivalItem 
      name="First Aid Kit"
      description="All first aid necessities"
      quantity= "10"
      cost= "10" />
    </React.Fragment>
  );
}

export default GearList;