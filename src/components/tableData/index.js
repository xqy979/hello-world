import React, { Component } from "react";
import { Table } from "antd";
import {TableList} from '@api/common'

// class 组件
class TableCompoent extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageNumber:1,
            pageSize:10,
            keyWork:'',
            data:[],
            selectedRowKeys:[],
            loadingTable:false,
        }
    }
    componentDidMount(){
        
        this.loadData()
    }
    //获取列表数据
    loadData=()=>{
        const{pageNumber,pageSize,keyWork} = this.state
        const resData = {
            url:this.props.config.url,
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
            this.setState({loadingTable:false})
        }).catch(err=>{
            this.setState({loadingTable:false})
        })
     }
       //复选框
    onCheckbox=(selectedRowKeys)=>{
        this.setState({
            selectedRowKeys:selectedRowKeys
        })
    }
    render(){
        const {loadingTable} = this.state
        const {checkbox,thead,rowKey} = this.props.config
        const rowSelection = {
            onChange:this.onCheckbox
        }

        return(
            <Table loadingTable={loadingTable} rowKey={rowKey?rowKey:'id'} rowSelection={checkbox?rowSelection:null}  columns={thead} dataSource={this.state.data} bordered/>
        )
    }
}

export default TableCompoent;