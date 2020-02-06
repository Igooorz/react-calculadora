import React, { Component } from 'react'
import './Calculadora.css'
import Botao from '../components/Botao'
import Display from '../components/Display'

export default class Calculadora extends Component {
    limpaMemoria = () => {
        console.log('limpar')
    }

    setOperation = (op) => {
        console.log(op)
    }

    addDigito = (dig) => {
        console.log(dig)
    }
    
    render() {
        return (
            <div className="calculadora">
                <Display value={0} />
                <Botao value="AC" click={this.limpaMemoria}/>
                <Botao value="/"/>
                <Botao value="7"/>
                <Botao value="8"/>
                <Botao value="9"/>
                <Botao value="*"/>
                <Botao value="4"/>
                <Botao value="5"/>
                <Botao value="6"/>
                <Botao value="-"/>
                <Botao value="1"/>
                <Botao value="2"/>
                <Botao value="3"/>
                <Botao value="+"/>
                <Botao value="0"/>
                <Botao value="."/>
                <Botao value="="/>
            </div>
        )
    }
}