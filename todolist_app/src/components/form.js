import React from 'react'

class Form extends React.Component{
    state={
        inputText: "do to list 0",
        list:""
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        
        this.setState({list: e.target.elements[0].value})
        // console.log({
        //     list: e.target.elements[0].value,
        // });
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
            <form className="form" onSubmit={this.handleSubmit}>
            <input name="inputText" placeholder="enter a todo"/>
            </form>
            {/* {this.state.inputText} */}
            {this.state.list}
        </>

        )
    }

}



export default Form