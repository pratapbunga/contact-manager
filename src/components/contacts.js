import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../context';

class Contacts extends Component {

  render() {

    return (
      <Consumer>
        {value => {
          const { contacts } = value ;
          return (
            <React.Fragment>
              {contacts.map(contactInfo => (
                <Contact key={contactInfo.id}
                  contacts={contactInfo} />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )

  }

}

export default Contacts
