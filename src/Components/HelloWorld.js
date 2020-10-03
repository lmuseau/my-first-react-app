import React from 'react'

class HelloWorld extends React.Component{
  render(){
    return (
      <h1 className="font-bold text-2xl"> Hello {this.props.name} </h1>
    )
  }
}

export default HelloWorld;