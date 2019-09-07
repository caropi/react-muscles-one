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
                {this.state.count === 42 ? (<iframe title="hitchhiker" src="https://giphy.com/embed/t64o8WukSJwqY" width="480" height="261" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>) : (<p>Count to 42: {this.state.count}</p>)}
                <Button onClick={this.handleCountUp} text="+"/>
                <Button onClick={this.handleCountDown} text="-"/>
            </div>
        )
    }
}
