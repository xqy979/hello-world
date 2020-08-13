import React,{Component} from 'react'
//导入layout组件
import LayoutAside from './components/aside'
// 引入头部
import LayoutHeader from  './components/header'
//内容去
import ContainerMain from '../../components/containerMain/index'
// css
import './layout.scss'
//antd
import {Layout} from 'antd'

const {Sider,Header,Content} = Layout
class Index extends Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    render(){
        return(
            <Layout className = "layout-wrap">
                <Header className = "layout-header"><LayoutHeader /></Header>
                <Layout>
                    <Sider width="250px"> <LayoutAside /> </Sider>
                    <Content className = "layout-main">
                        <ContainerMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Index