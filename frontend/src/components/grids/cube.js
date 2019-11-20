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

    if (this.state.class === "ele") {
      this.setState({class: "clicked"});
    } else {
      this.setState({class: "ele"});
    }

    this.props.switchPos([this.props.row, this.props.col]);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className={this.state.class} >
        {this.ele}
      </div>
    )
  }
}

export default Cube;