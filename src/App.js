import React, {Component} from 'react';

import './App.css';
import './DogList.css';
import DogList from './DogList';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




class App extends Component {
  state={
    dogs:[]
  }

componentDidMount(){
  Axios.get("https://dog.ceo/api/breeds/image/random/10").then((res)=>{

this.setState({dogs:res.data.message})
  })
  this.closeAfter7()

}

closeAfter7 = () => toast(`This website was
 created so that dog lovers can 
 look at random dogs. Please refresh the page to see different dogs`, { autoClose: 7000, type: "success",position:"top-center" });
  render(){
  return (
    <div className="container-fluid" style={{textAlign:'left'}}>
      <header>
      <a href="."><h1 style={{color:"black", hoverColor:"	#696969"}}><i> <u> Welcome to Dog World</u></i></h1></a>
      </header>
    <DogList dogs={this.state.dogs}/>
    <ToastContainer autoClose={8000} />
    </div>
  );
}
}

export default App;
