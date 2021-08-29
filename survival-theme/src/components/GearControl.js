import React from "react";
import NewSurvivalItemForm from './NewSurvivalItemForm';
import GearList from "./GearList";
import SurvivalItemDetail from "./SurvivalItemDetail";

class GearControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false,
      masterGearList: [{
        name: "Multi-Function Paracord Bracelet",
        description: "Survival bracelet with compass and built in fire starter",
        quantity: 10,
        cost: 10,
        id: "1"
      }],
      selectedSurvivalItem: null
    };
  }

  handleClick = () =>  {
    if (this.state.selectedSurvivalItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSurvivalItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewGearToList = (newSurvivalItem) => {
    const newMasterGearList = this.state.masterGearList.concat(newSurvivalItem);
    this.setState({masterGearList: newMasterGearList,
    formVisibleOnPage: false });
  }

  handleChangingSelectedSurvivalItem = (id) => {
    const selectedSurvivalItem = this.state.masterGearList.filter(survivalItem => survivalItem.id === id)[0];
    this.setState({selectedSurvivalItem: selectedSurvivalItem});
  }

  handleBuyingSurvivalItem = (SurvivalItemToEdit) => {
    const newMasterGearList = this.state.masterGearList.filter(survivalItem => survivalItem.id !== this.state.selectedSurvivalItem.id).concat(SurvivalItemToEdit);
    this.setState({
      masterGearList: newMasterGearList,
      selectedSurvivalItem: SurvivalItemToEdit
    })
  } 
  // buttonText="Buy Item"
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedSurvivalItem != null) {
      currentlyVisibleState = <SurvivalItemDetail buyButtonClick={this.handleBuyingSurvivalItem} survivalItem = {this.state.selectedSurvivalItem} />
      buttonText = "Return to Gear List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSurvivalItemForm onNewSurvivalItemCreation={this.handleAddingNewGearToList} />
      buttonText = "Return to gear inventory"
    } else {
      currentlyVisibleState = <GearList gearList={this.state.masterGearList} onSurvivalItemSelection={this.handleChangingSelectedSurvivalItem} />;
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