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
                <Botao value="AC" click={this.limpaMemoria} triple/>
                <Botao value="/" click={this.setOperation} operation/>
                <Botao value="7" click={this.addDigito}/>
                <Botao value="8" click={this.addDigito}/>
                <Botao value="9" click={this.addDigito}/>
                <Botao value="*" click={this.setOperation} operation/>
                <Botao value="4" click={this.addDigito}/>
                <Botao value="5" click={this.addDigito}/>
                <Botao value="6" click={this.addDigito}/>
                <Botao value="-" click={this.setOperation} operation/>
                <Botao value="1" click={this.addDigito}/>
                <Botao value="2" click={this.addDigito}/>
                <Botao value="3" click={this.addDigito}/>
                <Botao value="+" click={this.setOperation} operation/>
                <Botao value="0" click={this.addDigito} double/>
                <Botao value="." click={this.addDigito}/>
                <Botao value="=" click={this.setOperation} operation/>
            </div>
        )
    }
}