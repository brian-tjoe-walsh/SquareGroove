import React from 'react';

class DeleteButton extends React.Component{
  constructor(props){
      super(props)
  }

  componentDidMount(){
  }

  render(){
    let user = this.props.currentUser || {}
    const deleteButton = (<li onClick={this.props.delete}>Delete</li>);
    return (Object.keys(user).length === 0 || user.id !== this.props.grid.user) ? null : deleteButton;
  }  
}

export default DeleteButton;