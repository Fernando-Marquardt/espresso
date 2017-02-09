import React from 'react';

import Editor from '../../components/Editor';

import styles from './MainView.css';

class MainView extends React.Component {
    render() {
        return (
            <div className={styles.mainView}>
                <Editor />
            </div>
        );
    }
}

export default MainView;