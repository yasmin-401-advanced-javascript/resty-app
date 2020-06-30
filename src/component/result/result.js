import React from 'react';
import ReactJson from 'react-json-view'

class Result extends React.Component{
    constructor(props) {
        super(props);
      }
      
render(){
    console.log(this.props.result)
return (
    <>
    <ReactJson src={this.props.result} />
    </>
)
}
}

export default Result;