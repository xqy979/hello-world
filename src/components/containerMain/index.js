import React ,{Component}from 'react';
import { Switch } from 'react-router-dom';

//私有组件方法
import PrivateRouter from '../privateRouter/index'
import Components from '../containerMain/components'


class ContainerMain extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
        <Switch>
            {
              Components.map(item =>{
                return <PrivateRouter exact key = {item.path} path = {item.path} component = {item.component} /> 
              })
          }
        </Switch>
      
    );
  }
}
export default ContainerMain;
