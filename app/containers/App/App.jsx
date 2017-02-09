// @flow
import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MainView from '../MainView';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Sidebar />
        <MainView />
      </div>
    );
  }
}
