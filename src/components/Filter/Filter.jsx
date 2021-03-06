import React from 'react';
import { connect } from 'react-redux';
import actionsContact from '../../redux/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: (e)=>dispatch(actionsContact.changeFilter(e.currentTarget.value))
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);