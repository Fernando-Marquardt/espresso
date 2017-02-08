import React from 'react';

import Treeview from '../components/Treeview';

import styles from './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={"uk-background-secondary uk-light " + styles.sidebar}>
                <Treeview />
            </div>
        );
    }
}

export default Sidebar;