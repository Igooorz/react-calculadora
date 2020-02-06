import React, { Component } from 'react'
import './Calculadora.css'
import Botao from '../components/Botao'
import Display from '../components/Display'

const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = {...inicialState}

    limpaMemoria = () => {
        this.setState({...inicialState})
    }

    setOperation = (op) => {
        console.log(this.state)
        console.log(op)
        if (this.state.current === 0) {
            this.setState({
                clearDisplay: true,
                operation: op,
                current: 1,
            })
        } else {
            let equals = op === '='
            let currentOperation = this.state.operation

            let values = [...this.state.values]
            try{
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: String(values[0]),
                operation: equals ? null : op,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
        console.log(this.state)
    }

    addDigito = (dig) => {
        if (dig === '.' && this.state.displayValue.includes('.')) {
            return
        }

        let clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        let currentValue = clearDisplay ? '' : this.state.displayValue
        let displayValue = currentValue + dig
        this.setState({
            displayValue,
            clearDisplay: false
        })

        if (dig !== '.') {
            let i = this.state.current
            let newValue = parseFloat(displayValue)
            let values = [...this.state.values]
            values[i] = newValue
            this.setState({
                values
            })
            console.log(values)
        }
    }
    
    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.displayValue} />
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