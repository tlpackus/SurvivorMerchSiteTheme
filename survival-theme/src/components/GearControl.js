import React from "react";
import NewSurvivalItemForm from './NewSurvivalItemForm';
import GearList from "./GearList";

class GearControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false,
      masterGearList: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingNewGearToList = (newSurvivalItem) => {
    const newMasterGearList = this.state.masterGearList.concat(newSurvivalItem);
    this.setState({masterGearList: newMasterGearList,
    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSurvivalItemForm onNewSurvivalItemCreation={this.handleAddingNewGearToList} />
      buttonText = "Return to gear inventory"
    } else {
      currentlyVisibleState = <GearList gearList={this.state.masterGearList} />
      buttonText = "Add New Product";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default GearControl;