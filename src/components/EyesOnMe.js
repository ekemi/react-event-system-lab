// Code EyesOnMe Component Here

import React, {Component} from 'react'

export default class EyesOnMe extends Component() {
    //focus when your write on it
    handleFocus=()=> console.log('Good!')
   //blur when elements lost his focus
    handleBlur=()=>console.log('Hey! Eyes on me!')
    
    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes</button>
            </div>  
        )
    }
}

