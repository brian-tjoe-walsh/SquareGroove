import React from 'react';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.ele = this.props.ele;
    this.state = {class: "ele"};
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.class === "ele") {
      this.setState({class: "clicked"});
    } else {
      this.setState({class: "ele"});
    }
  }

  render() {
    // debugger
    return (
      <div onClick={this.handleClick.bind(this)} className={this.state.class}>
        {this.ele}
      </div>
    )
  }
}

export default Cube;