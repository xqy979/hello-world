import React, { Component,Fragment } from "react";
//antd
import {Form,Input,Button,Table} from 'antd';
//api
import {GetList} from '../../api/department'
class DepartmentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageNumber:'1',
            pageSize:'10',
            keyWork:'',
            columns:[
                {title:'部门名称',dataIndex:'name',key:'name'},
                {title:'禁启用',dataIndex:'status',key:'status'},
                {title:'人员数量',dataIndex:'number',key:'number'},
                {title:'操作',dataIndex:'operation',key:'operation',width:215}

            ],
            data:[]
        };
    }
    //生命周期挂载完成
     componentDidMount=()=>{
        this.loadData()
     }
     //获取列表数据
     loadData=()=>{
        const resData = {
            pageNumber:this.state.pageNumber,
            pageSize:this.state.pageSize
        }
        GetList(resData).then(res=>{
            const data = res.data.data.data
            if(data){
                this.setState({
                    data:data
                })
            }
        })
     }
    //搜索
    onFinish=(value)=>{
        this.setState({
            keyWork:value.name
        })
        console.log(this.state.keyWork)
    }
    render(){
        const {columns,data} = this.state
        return (
            <Fragment>
                <Form layout = 'inline' onFinish = {this.onFinish}>
                    <Form.Item label="部门名称" name="name">
                        <Input type='text' autoComplete='off' allowClear placeholder='请输入部门名称'/>
                    </Form.Item>
                    <Form.Item >
                        <Button  type='primary' htmlType='submit'>搜索</Button>
                    </Form.Item>
                </Form>
                <Table rowKey='id' bordered columns={columns} dataSource={data} > </Table>
            </Fragment>
        )
    }
}
export default DepartmentList;