import React, { Component } from 'react'

export default class Dog extends Component {
    render() {
        const dogURL = this.props
        return (
            <div className="child">
                <img style={{width:"50vh",height:"50vh", borderLeftColor:"green",
                borderStyle: "outset", borderWidth:".5rem" ,marginTop:"2rem", }} src={dogURL.url} alt="dogoss"/>
            </div>
        )
    }
}
