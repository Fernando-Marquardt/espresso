// @flow
import React, { Component } from 'react';

import Sidebar from './Sidebar';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Sidebar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
