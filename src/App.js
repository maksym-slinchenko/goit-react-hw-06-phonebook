import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './components/contacts-form/contacts-form';
import ContactList from './components/contact-list/contact-list';
import Filter from './components/filter/filter';
import './App.css';

export default class App extends Component {
  // Получение контактов из Local Storage
  componentDidMount() {
    const primaryContacts = JSON.parse(localStorage.getItem('contacts'));
    return primaryContacts;
  }

  // Запись контактов в Local Storage
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="Logo-slider"
        >
          <h1 className="App-logo">Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

// Парсинг контактов из Local Sotrage

// const getContactsFromLocalStorage = (primaryContacts, { contacts }) => {
//   if (primaryContacts) {
//     return primaryContacts;
//   }
//   return contacts;
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   getContactsFromLocalStorage: (primaryContacts, this.props.state) =>
//     dispatch(actions.createContacts(contacts)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);
