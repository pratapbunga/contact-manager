import React, { Component } from 'react';
import { Consumer } from '../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo : false
  };

  onShowClick = (e) => {
    this.setState({showContactInfo : false});
  }

  onDeleteClick = (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
      })
    }

  render(){

    const { contacts } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return(
            <div>
              <h4>{contacts.name}
              <i onClick={() => this.setState({showContactInfo : !this.state.showContactInfo})} >UP </i>
              <i onClick={this.onDeleteClick.bind(this, contacts.id, dispatch)} >DEL </i></h4>

              {showContactInfo ? (<ul>
                <li>Email: {contacts.email}</li>
                <li>Phone number: {contacts.phone}</li>
              </ul>) : null}

            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {

}

export default Contact;
