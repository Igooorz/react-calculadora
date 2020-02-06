import React, { Component } from 'react';
import './Botao.css'

export default class Botao extends Component {
  render() {
    let classes = 'botao '
    classes += this.props.operation ? 'operation' : ''
    classes += this.props.double ? 'double' : ''
    classes += this.props.triple ? 'triple' : ''

    return (
        <React.Fragment>
            <button 
                className={classes}
                onClick={e => this.props.click && this.props.click(this.props.value)}
            >
                {this.props.value}
            </button>
        </React.Fragment>
    );
  }
}
