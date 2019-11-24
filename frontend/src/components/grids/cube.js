import React from 'react';
import $ from "jquery";


class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.ele = this.props.ele;
    this.state = {
      class: "ele",
      col: null};
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // debugger;
    if (this.ele === 1) {
      this.ele = 0;
    } else {
      this.ele = 1;
    }

    if (this.state.class === "ele") {
      this.setState({class: "clicked"});
    } else {
      this.setState({class: "ele"});
    }
    this.props.switchPos([this.props.row, this.props.col]);
    debugger;
  }

  render() {
    if (this.ele === 1 && this.state.class !== "clicked") {
      this.setState({class: "clicked"});
    }

    return (
      <div onClick={this.handleClick.bind(this)} className={this.state.class} >
        {this.ele}
      </div>
    )
  }
}

export default Cube;