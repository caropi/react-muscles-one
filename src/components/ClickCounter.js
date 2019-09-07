import React, { Component } from 'react'
import Button from './Button'
export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleCountUp = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }
    handleCountDown = () => {
        this.setState(({count}) => ({
            count: count -1
        }))
    }
    render() {
        return (
            <div>
                {this.state.count === 42 ? (<img href="./42.gif" alt="so long and thanks for all the fish"/>) : (<p>Count to 42: {this.state.count}</p>)}
                <Button onClick={this.handleCountUp} text="+"/>
                <Button onClick={this.handleCountDown} text="-"/>
            </div>
        )
    }
}