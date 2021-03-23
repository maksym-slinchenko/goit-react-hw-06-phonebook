import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactItem from '../contact-item/contact-item';
import styles from './contact-list.module.css';
class ContactList extends Component {
  render() {
    return (
      <>
        <TransitionGroup component="ul" className={styles.contactList}>
          {this.props.contacts.map(i => {
            return (
              <CSSTransition key={i.id} timeout={250} classNames={styles}>
                <ContactItem id={i.id} name={i.name} number={i.number} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}

// Возвращение отфильтрованного массива
const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = state => ({
  contacts: getFilteredContacts(state.contacts),
  // filter: state.contacts.filter,
});
export default connect(mapStateToProps)(ContactList);
