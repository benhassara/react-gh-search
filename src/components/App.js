import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserSearch from './UserSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  updateUser(e) {
    this.setState({ username: e.target.value });
  }

  fetchUser(e) {
    const API_USER_BASE = 'http://api.github.com/users/'
    window.fetch(`${API_USER_BASE}${this.state.username}`)
      .then(res => res.json())
      .then(usr => {
        this.setState({usrData: usr});
      })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 className="text-center">GitHub Users</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <UserSearch
              userUpdate={this.updateUser.bind(this)}
              inputVal={this.state.username}
              searchFn={this.fetchUser.bind(this)}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>No user has been searched for yet.</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
