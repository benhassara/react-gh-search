import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserSearch from './UserSearch';

class App extends Component {
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
            <UserSearch />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
