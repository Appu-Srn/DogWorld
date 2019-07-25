import React, { Component } from 'react'
import Dog from './Dog'


export default class DogList extends Component {
    render() {
        const dogsArray = this.props.dogs.map((dogURL, i)=>{

return (<Dog key={i} url={dogURL} />)
        })
        return (
            <div className="container">
                {dogsArray}
            </div>
        )
    }
}
