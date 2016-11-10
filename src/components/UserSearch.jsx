import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button } from 'react-bootstrap';

class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
  }

  handleChange(e) {
    this.setState({ user: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup controlId="userSearchText">
          <ControlLabel>Search by GitHub username: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.user}
            onChange={this.handleChange.bind(this)} />
        </FormGroup>
        <Button bsStyle="primary">Search</Button>
      </form>
    );
  }
}

export default UserSearch;
