import React, { Component } from 'react';
import {
  Panel,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { shuffle } from 'lodash';

class UserDisplay extends Component {
  render() {
    const usr = this.props.usr;
    const top5 = (this.props.repos) ? shuffle(this.props.repos).slice(0, 5) : [];

    if (!usr) return null;
    return (
      <Panel header={usr.login}>
        <Row>
          <Col xs={6} md={4}>
            <Image src={usr.avatar_url} circle responsive />
          </Col>
          <Col xs={6} md={8}>
            <h2>{usr.name}</h2>
            <ul>
              {top5.map(repo => {
                return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>;
              })}
            </ul>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default UserDisplay;
