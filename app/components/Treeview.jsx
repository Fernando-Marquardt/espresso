import React from 'react';
import fs from 'fs';
import path from 'path';

class Treeview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.directory = 'C:\\Projects\\test';
        this.state.projectName = path.basename(this.state.directory);
        this.state.files = this.getFiles(this.state.directory);
    }

    getFiles(directory) {
        var files = [];
        var dir = fs.readdirSync(directory);

        for (let filepath of dir) {
            files.push(filepath);
        }

        return files;
    }

    render() {
        return (
            <div>
                <ul className="uk-nav uk-nav-default">
                    <li className="uk-nav-header">{this.state.projectName}</li>
                    {this.state.files.map(file => (<li key={file}><a href="#">{file}</a></li>))}
                </ul>
            </div>
        );
    }
}

export default Treeview;