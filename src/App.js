import React,{Component,Suspense,lazy}from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

// import Login from './views/login/index'
const Login = lazy(()=> import ('./views/login/index'))



class App extends Component{
  constructor(props){
    super()
    this.state ={}
  }
  render(){
    return (
      //
      <div className = 'test'>
        <Router>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route exact component = {Login} path='/' />
            </Switch>
          </Suspense>
        </Router>
        
      </div>
    );
  }
}



export default App;
