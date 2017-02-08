import React from 'react';

import ace from 'brace';
import 'brace/mode/java';
import 'brace/theme/monokai';

import styles from './Editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorId: 'teste'
        };
    }

    componentDidMount() {
        const editor = ace.edit(this.state.editorId);
        editor.getSession().setMode('ace/mode/java');
        editor.setTheme('ace/theme/monokai');
    }

    render() {
        return (
            <div id={this.state.editorId} className={styles.editor}></div>
        );
    }
}

export default Editor;