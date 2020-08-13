import React, { Component} from 'react'
//asdieMenu
import AsdieMenu from '../../../components/asideMenu/index'

class Aside extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
          <AsdieMenu />
        )
    }
}
export default Aside