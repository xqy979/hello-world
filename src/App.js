import React,{Component,Suspense,lazy}from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import PrivateRouter from "./components/privateRouter/index";

// import Login from './views/login/index'
const Login = lazy(()=> import ('./views/login/index'))
const Index = lazy(()=> import ('./views/index/index'))

// 私有组件方法


class App extends Component{
  constructor(props){
    super(props)
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
              <PrivateRouter  component = {Index} path='/index' />
            </Switch>
          </Suspense>
        </Router>
        
      </div>
    );
  }
}
export default App;
