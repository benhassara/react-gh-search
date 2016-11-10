import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserSearch from './UserSearch';
import UserDisplay from './UserDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', firstSearch: false };
  }

  updateUser(e) {
    this.setState({ username: e.target.value });
  }

  fetchUser(e) {
    e.preventDefault();
    const API_USER_BASE = 'http://api.github.com/users/'

    if (!this.state.firstSearch) this.setState({firstSearch: true});

    window.fetch(`${API_USER_BASE}${this.state.username}`)
      .then(res => res.json())
      .then(usr => {
        this.setState({usrData: usr});
      });

    window.fetch(`${API_USER_BASE}${this.state.username}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({usrRepos: repos}));
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
        <Row style={{marginTop: '1rem'}}>
          <Col xs={12}>
            <UserDisplay
              usr={this.state.usrData}
              repos={this.state.usrRepos}
              firstSearch={this.state.firstSearch} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
