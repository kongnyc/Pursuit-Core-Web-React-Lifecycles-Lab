import React, { Component } from 'react'

export class TodoItem extends Component {

    render() {
        let {id,title}=this.props.item
        return (
            <div>
                <p>
                {title}
                {" "}
                <button onClick={this.props.completeBtn.bind(this,id)}>del</button>
                </p>
            </div>
        )
    }
}

export default TodoItem
