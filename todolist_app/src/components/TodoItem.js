import React, { Component } from 'react'

export class TodoItem extends Component {

    render() {
        let {title}=this.props.item
        return (
            <div>
                <p>
                {title}
                {" "}
                <button onClick={this.props.delBtn.bind(this,title)}>x</button>
                </p>
            </div>
        )
    }
}

export default TodoItem
