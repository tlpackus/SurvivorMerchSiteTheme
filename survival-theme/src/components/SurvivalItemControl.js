import React from "react";
import NewSurvivalItemForm from './NewSurvivalItemForm';
import GearList from "./GearList";

class SurvivalItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSurvivalItemForm />
      buttonText = "Return to gear inventory"
    } else {
      currentlyVisibleState = <GearList />
      buttonText = "Add New Products";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default SurvivalItemControl;