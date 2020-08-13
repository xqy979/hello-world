import React, { Component } from 'react'
import './header.scss'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <div className = "all-header">
                <h1 className='logo'>
                    <span>LOGO</span>
                </h1>
                <div className = "right-header">xuqy后台管理系统</div>
            </div>
        )
    }
}
export default Header