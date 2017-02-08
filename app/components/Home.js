// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

import Editor from '../components/Editor';

export default class Home extends Component {
  render() {
    return (
      <div><Editor /></div>
    );
  }
}
