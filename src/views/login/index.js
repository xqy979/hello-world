import React, { Component,Fragment } from 'react'
import LoginFrom from './LoginForm'
import RegisterForm from './RegisterForm'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            formType : 'login',
        }
    };

    switchFrom = (value)=>{
        this.setState({
            formType:value
        })
    }
 
    render() {
        return (
            <Fragment>
            <div className='form-wrap'>
                <div>
                    {this.state.formType ==='login'
                    ?<LoginFrom switchFrom={this.switchFrom}></LoginFrom> 
                    : <RegisterForm switchFrom={this.switchFrom}></RegisterForm>}
                </div>
                    
                    
            </div>
            </Fragment>
        )
    }
}
export default Login