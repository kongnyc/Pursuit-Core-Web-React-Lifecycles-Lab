import React from 'react'

class Form extends React.Component{
    state={
        input: "place enter to do list"
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hell")
    }

    render(){
        return(
            <>
            <form className="form" onSubmit={this.handleSubmit}>
            <input placeholder="enter a todo"/>
            </form>
        </>

        )
    }

}



export default Form