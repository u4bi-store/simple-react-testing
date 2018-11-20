import React, { Component } from 'react'

class Box extends Component {

    state = {
        tick : 0,
        text : ''
    }

    addTick = _ => this.setState( ( { tick }) => ({ tick : ++tick }))

    setText = ({ target : { value }}) => this.setState({ text : value })

    render() {
        const { tick, text } = this.state
        const { addTick, setText } = this

        return (
        <div className='Box'>

            <span>{ tick }</span>

            <button onClick={ addTick }>AddTick</button>

            <input type='text' value={ text } onChange={ setText } />

        </div>
        )
    }
}

export default Box