import React, { Component,Fragment } from "react";
import {Link} from 'react-router-dom';
//antd
import {Form,Input,Button,Switch,message,Modal} from 'antd';
//api
import {Delete,Status} from '@api/department'
import {TableList} from '@api/common'

//url
import requestUrl from '@api/requestUrl'
//table 组件
import TableCompoent from "../../components/tableData";
class DepartmentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            //请求参数
            pageNumber:1,
            pageSize:10,
            keyWork:'',
            //复选宽参数
            id:'',
            // selectedRowKeys:[],
            //弹窗
            visible:false,
            confirmLoading:false,
            //表头
            tableConfig:{
                url:requestUrl.departmentList,
                rowKey:'id',
                checkbox:true,
                thead:[  {title:'部门名称',dataIndex:'name',key:'name'},
                {
                    title:'禁启用',
                    dataIndex:'status',
                    key:'status',
                    render:(text,rowData)=>{
                        return   <Switch onChange={()=>this.onHandleSwitch(rowData)} checkedChildren="启用" unCheckedChildren="禁用" defaultChecked={rowData.status === '1'?true:false} />
                    }
                },
                {title:'人员数量',dataIndex:'number',key:'number'},
                {title:'操作',
                dataIndex:'operation',
                key:'operation',
                width:215,
                render:(text,rowData)=>{
                    return <div className = 'inline-button'>
                        <Button type='primary'>
                            <Link to={{pathname:'/index/department/add', state:{id:rowData.id}}}>编辑</Link>
                        </Button>
                        <Button onClick={()=>this.onHandlerDelete(rowData.id)}>删除</Button>
                    </div>
                }
            }
        ]

            },
            data:[]
        };
    }
    //生命周期挂载完成
     componentDidMount=()=>{
        // this.loadData()
     }
     loadData=()=>{
        const{pageNumber,pageSize,keyWork} = this.state
        const resData = {
            url:this.state.tableConfig.url,
            data:{
                pageNumber:pageNumber,
                pageSize:pageSize,
            }
           
        }
        if(this.state.keyWork){
            resData.name = keyWork
        }
        TableList(resData).then(res=>{
            const data = res.data.data.data
            if(data){
                this.setState({
                    data:data
                })
            }
        })
     }
     //删除
    onHandlerDelete(id){
        if(!id){return false}
        this.setState({
            id:id,
            visible:true,
        })
     }
    //搜索
    onFinish=(value)=>{
        this.setState({
            keyWork:value.name,
            pageNumber:1,
            pageSize:10,
        })
       //请求数据
       this.loadData()
    }
    //复选框
    onCheckbox=(selectedRowKeys)=>{
        this.setState({
            selectedRowKeys:selectedRowKeys
        })
    }
    //确定弹窗
    modalThen=()=>{
        //点击确定加载loading效果显示
        this.setState( {confirmLoading:true,})
        let resData = {
            id:this.state.id
        }
        Delete(resData).then(res=>{
            message.info(res.data.message)
            //数据删除完成后隐藏loading效果,关闭弹窗
            this.setState({visible:false,confirmLoading:false})
            //删除成功请求数据
            this.loadData()
        })
      
    }
    //禁启用
    onHandleSwitch(data){
        if(!data.status){return false}
        let resData = {
            id:data.id,
            status:data.status
        }
        Status(resData).then(res=>{
            message.info(res.data.message)
        })
    }
    render(){
        const {visible,confirmLoading} = this.state
      
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
                <div className='table-wrap'>
                    <TableCompoent config={this.state.tableConfig}/>
                </div>

                <Modal
                    title="提示"
                    visible={visible}
                    onOk={this.modalThen}
                    confirmLoading={confirmLoading}
                    onCancel={()=>{this.setState({visible:false})}}
                    okText='确定'
                    cancelText='取消'
                    >
                    <p className='text-Modal'>确定删除此信息?<strong>删除后不可以恢复</strong></p>
                </Modal>
            </Fragment>
            
        )
    }
}
export default DepartmentList;