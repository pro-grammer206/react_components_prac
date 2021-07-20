import {Component} from 'react'

export default class Navbar extends Component{
    clickme=()=>{
        this.props.toggleNav()
    }
    render(){
        return(
        <div className="nav">
            <span id='close' onClick={this.clickme}>&times;</span>
            <span>Pay & Transfer</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        )
    }
}
