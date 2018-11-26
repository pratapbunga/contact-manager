import React, { Component } from 'react';
import { Consumer } from '../context';

class AddContact extends Component {

  constructor(props){
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

  }
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact);
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '3493493934'
  }

  render() {
    const {name, email, phone } = this.props;
    return(
      <div className="">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <input type="name"
              name="name"
              defaultValue={name}
              ref={this.nameInput}/>
          </div>
          <div>
            <label>Email</label>
            <input type="email"
              name="email"
              defaultValue={email}
              ref={this.emailInput}/>
          </div>
          <div>
            <label>Phone</label>
            <input type="text"
              name="phone"
              defaultValue={phone}
              ref={this.phoneInput}/>
          </div>

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default AddContact;
