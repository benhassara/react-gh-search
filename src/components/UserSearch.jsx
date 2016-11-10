import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button } from 'react-bootstrap';

class UserSearch extends Component {
  render() {
    return (
      <form>
        <FormGroup controlId="userSearchText">
          <ControlLabel>Search by GitHub username: </ControlLabel>
          <FormControl
            type="text"
            value={this.props.inputVal}
            onChange={this.props.userUpdate}
            placeholder="Enter a username" />
        </FormGroup>
        <Button
          block
          bsStyle="primary"
          type="submit"
          onClick={this.props.searchFn}>Search</Button>
      </form>
    );
  }
}

export default UserSearch;
