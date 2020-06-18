import React,{Component}from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Login from './views/login/index'



class App extends Component{
  constructor(props){
    super()
    this.state ={}
  }
  render(){
    return (
      //
      <div className = 'test'>
        <BrowserRouter>
          <Switch>
            <Route exact component = {Login} path='/' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
