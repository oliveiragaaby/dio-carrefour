import React from 'react'

class HelloWorld extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <p>Hello, {this.props.name}</p>
            </div>
        )
    }

}

export default HelloWorld