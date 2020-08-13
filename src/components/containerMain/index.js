import React ,{Component}from 'react';
import { Switch } from 'react-router-dom';

//组件
import UserList from '../../views/user/List'
import UserAdd from '../../views/user/Add'

//私有组件方法
import PrivateRouter from '../privateRouter/index'

class ContainerMain extends Component{
  constructor(props){
    super(props)
    this.state ={}
  }
  render(){
    return (
        <Switch>
            <PrivateRouter  path= '/index/user/list' component={UserList}/>
            <PrivateRouter  path= '/index/user/add' component={UserAdd}/>
        </Switch>
      
    );
  }
}



export default ContainerMain;
