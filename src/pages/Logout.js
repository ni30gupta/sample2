import React, { Component } from 'react'
import Header from "../component/Header";

export class Logout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        localStorage.clear();
        return (
            <div>
                <Header />
               { this.props.history.push('/')}
            </div>
        )
    }
}

export default Logout
