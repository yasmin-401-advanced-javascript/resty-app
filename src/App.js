import React from 'react';
import Header from './component/header/header.js'
import Form from './component/form/main.js';
import Footer from './component/footer/footer.js';
import Result from './component/result/result.js';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result : {}
    };
  }
  handelForm = (result) =>{
this.setState({result : result})
  }

  render(){
    return (
      <>
      <Header />
      <Form handle = {this.handelForm}/>
      <Result result = {this.state.result}/>
      <Footer />
      </>
    );
  }
}

export default App;
