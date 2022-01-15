import React, { Component } from 'react'
import  {Button} from 'reactstrap'
import axios from 'axios';
import './App.css' ;
export default class App extends Component {
  state={advice:""};
  fetchadvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice}= response.data.slip;
      this.setState({advice:advice});
      console.log(advice);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  componentDidMount(){
    this.fetchadvice();
  }
   

  render() {
    const {advice} = this.state; 
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='header'>{advice}</h1>
          <button className="button" onClick={this.fetchadvice}>
           <span> Give Me Advice!</span>
            </button>
        </div>
      
   
    
 
      </div>
    )
  }
}
