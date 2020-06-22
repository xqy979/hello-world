import React, { Component,Fragment } from 'react'
// import { Button } from 'antd';
import './index.scss';
import { Form, Input, Button,Row, Col,  } from 'antd';
import { UserOutlined,LockOutlined   } from '@ant-design/icons';

import {validate_password} from '../../until/validate'

// const style = { background: '#0092ff', padding: '8px 0' };

class RegisterForm extends Component {
    constructor() {
        super()
        this.state = {}
    };
 
    onFinish = (values) => {
          console.log('Received values of form: ', values);
    }
    toogleForm = () => {
        // 调父级的方法
        this.props.switchFrom("login");
    }

    render() {
        return (
            <Fragment>
                <div className='form-header'>
                    <h4>注册</h4>
                    <span onClick={()=>this.toogleForm()}>登录</span>
                </div>
                <div className='form-content'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={()=>this.onFinish}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item  name="password" rules={
                            [
                                { required: true, message: '密码不能为空!' },
                                { pattern: validate_password, message: '请输入大于6位小于20位数字+字母' },
                            ]} >
                            <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item  name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item  name="code" rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Row gutter={13}>
                                <Col className="gutter-row" span={15}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="code" />
                                </Col>
                                <Col className="gutter-row" span={9}>
                                    <Button type="primary" htmlType="submit" danger className="login-form-button">
                                        获取验证码
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>  
                                                                    
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}
export default RegisterForm