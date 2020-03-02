'use strict';

// import React from 'react';
// import '../../common';
// import largeNumber from 'large-number-t';
// import logo from './images/ku.jpg';
// import { a } from './tree-shaking';
// import './search.less';

const React = require('react');
const largeNumber = require('large-number-t');
const logo = require('./images/ku.jpg');
// const a = require('./tree-shaking');
require('./search.less');

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./text.js').then((Text)=>{
            this.setState({
                Text: Text.default
            })
        });
    }

    render() {
        // const funcA = a();
        console.log(logo)
        const { Text } = this.state;
        const addResult = largeNumber('11','29');
        return (
            <div className="search-text">
                {
                    Text ? <Text /> : null
                }
                {addResult}
                {/* {funcA} */}
                Search page dsppp
                <img src={logo} 
                    onClick={this.loadComponent.bind(this)}
                />
            </div>
        );
    }
}

module.exports = <Search />;