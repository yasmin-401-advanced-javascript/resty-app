import React from 'react';
import './main.scss';

class Counter  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        method: '',
        request: {},
      };
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log('url', this.state.url , 'method', this.state.method );
      
      if ( this.state.url && this.state.method ) {
        let request = {
          url: this.state.url,
          method: this.state.method,
        };
        let url = '';
        let method = '';
        console.log(this.state.method);
        this.setState({ request, url, method });
        
        e.target.reset();
      }else{
        alert('missing information we need to pass the URL & the REST method you want!');
      }
      } 
    handleChange = (e) => {
      const url = e.target.value;
      this.setState({ url });
      // console.log(url);
    };
      handleChangeMethod = (e) => {
        const method = e.target.value;
        this.setState({ method });
        // console.log(method);
    };
    render() {
      return (
  <main  className="main">
    <form onSubmit={this.handleSubmit}>
      <legend>
        <label>
          URL :
        </label>
        <input id ="url"  type="text" placeholder="type here" onChange={this.handleChange}>
        </input>
      <button type="submit">GO!</button>
      </legend>
      <div className="method">
      <input name ="method" type="radio" className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}  value="get"/>
     
      <label>GET</label>
     
      <input name ="method" type="radio" className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod} value="post"/>
     
      <label>POST</label>
     
      <input name ="method" type="radio" className={this.state.method === 'update' ? 'active' : ''} id="update" onClick={this.handleChangeMethod} value="update"/>
     
      <label>UPDATE</label>
     
      <input name ="method" type="radio" className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod} value="delete"/>
     
      <label>DELETE</label>
      </div>
    </form>
    <div className="pragraph">
    <section className="results">
          <span className="method">METHOD: {this.state.request.method}</span>
          <br>
          </br>
          <span className="url">URL: '{this.state.request.url}'</span>
        </section>
    </div>
  </main>
  );
  };
  }

  
  export default Counter;