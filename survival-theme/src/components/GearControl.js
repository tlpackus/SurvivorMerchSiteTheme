import React from "react";
import NewSurvivalItemForm from './NewSurvivalItemForm';
import GearList from "./GearList";
import SurvivalItemDetail from "./SurvivalItemDetail";

class GearControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false,
      masterGearList: [],
      selectedSurvivalItem: null
    };
    // this.handleClick = this.handleClick.bind(this);
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedSurvivalItem != null) {
      currentlyVisibleState = <SurvivalItemDetail survivalItem = {this.state.selectedSurvivalItem} />
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