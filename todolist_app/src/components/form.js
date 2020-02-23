import React from 'react'
import ToDOList from "./todolist"

class Form extends React.Component{
    state={
        list:[ToDOList]
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        e.persist();
        let {value}=e.target.elements[0]
        if(this.state.list){
            this.setState(prevState=>{
                return ({
                    list: [...prevState.list,value]
                })
            })
        }else{
            this.setState({list: value})
        }
        // console.log({
        //     list: e.target.elements[0].value,
        // });
    }

    handleDelete=e=>{
        console.log("hell")
    }

    componentDidMount(){
        
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