import React from "react";
class ExplainBindingsComponent extends React.Component {
    handleClick = () => {
      alert("ExplainBindingsComponent");
    };
  
    render() {
      return (
        <button onClick={this.handleClick} type="button">
            ExplainBindingsComponent
        </button>
      );
    }
  }
  export default ExplainBindingsComponent;