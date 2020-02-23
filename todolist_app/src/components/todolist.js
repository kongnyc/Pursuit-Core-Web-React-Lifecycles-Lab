import React from 'react'

class ToDOList extends React.Component{
    state={
        list:[]
    }
    render(){
        return(
             <div>
            {this.state.list} 
            </div>
        )
        
    }

}



export default ToDOList