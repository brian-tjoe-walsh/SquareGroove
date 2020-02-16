import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      class: "show"
    };
    this.title = this.props.title;
    this.handleClick = this.handleClick.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // debugger;

    if (this.state.class === "show") {
      this.setState({ class: "input" });
    } else {
      this.setState({ class: "show" });
    }
  }

  updateTitle(e) {
    this.title = e.currentTarget.value;
  }

  handleSubmit(e) {
    this.props.titleChange(this.title);
    this.handleClick(e);
  }

  render() {

    if (this.state.class === "show") {
      return(
        <div className="gridShowTitle" onClick={this.handleClick}>
          {this.title}
        </div>
      );
    } else {
      return(
        <form className="gridShowTitle" onSubmit={this.handleSubmit}>
          <input
            className="inputTitle"
            onChange={this.updateTitle}
            type="text"
            defaultValue={this.title}>
          </input>
          {/* <i className="fas fa-times-circle" onClick={this.handleClick}></i> */}
          <input type="submit" className="titleSubmit" value="Submit"/>
          </form>
      )
    }
  }
}

export default Title;