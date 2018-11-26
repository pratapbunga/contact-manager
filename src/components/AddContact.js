import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import TextInputGroup from './textInputGroup'
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    //Check for errors
    if(name === ''){
      this.setState({error: {name: 'Name is required'}})
    }
    if(email === ''){
      this.setState({error: {email: 'Name is required'}})
    }
    if(phone === ''){
      this.setState({error: {phone: 'Name is required'}})
    }

    const newContact = {
      name,
      email,
      phone,
    }

    axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => {
        dispatch({type: 'ADD_CONTACT', payload: res.data })
      })

      this.setState({
      name: '',
      email: '',
      phone: ''

    });

    this.props.history.push('/');
  }

  onChange = (e) => this.setState({[e.target.name] : e.target.value});

  render() {
    const {name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}/>

                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}/>

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}/>

                <input type="submit"/>

              </form>
            </div>
          )
        }}
      </Consumer>
    )

  }
}

export default AddContact;
