import React, { Component } from "react";
import { connect } from "react-redux";
import Messenger from "../components/Messenger";

// import * as actions from '../actions/index'
class messengerContainer extends Component {
  render() {
    var { messenger } = this.props;
    return <Messenger mess={messenger}></Messenger>;
  }
}
var mapStateToProps = (state) => {
  return {
    messenger: state.messenger,
  };
};

export default connect(mapStateToProps, null)(messengerContainer);
