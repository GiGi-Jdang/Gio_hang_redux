import React, { Component } from "react";

class Messenger extends Component {
  render() {
    var { mess } = this.props;
    return (
      <div>
        <h3>
          <span className="badge amber darken-2">{mess}</span>
        </h3>
      </div>
    );
  }
}

export default Messenger;
