import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts-actions';

function Filter({ value, onChangeFiter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={onChangeFiter}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFiter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.filter,
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onChangeFiter: e => dispatch(actions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
