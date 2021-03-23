import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts-actions';

class ContactItem extends Component {
  onRemove;

  render() {
    const { id, name, number } = this.props;

    return (
      <>
        <li key={id} name={name}>
          {`${name}: ${number}`}
          <button
            type="button"
            onClick={() => {
              // изменение стэйта, удаление
              this.props.onRemove(id);
              // изменение стэйта, удаление
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
const mapStateToprops = state => ({ contacts: state.contacts });
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeContacts(id)),
});
export default connect(mapStateToprops, mapDispatchToProps)(ContactItem);
