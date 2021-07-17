import React, {Component} from "react"
import "./li.css"

class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNames : props.classNames,
            page:props.page
        }
        this.setActive = () => {
            this.setState((state) => {
                if(state.classNames !== "activeLi") {
                    return{classNames: state.classNames + "activeLi"}
                }
                else {

                }
                
            })
        } 
        console.log(this.state.classNames)
    }
    render () {
        return (
            <li className={this.state.classNames} onClick={this.setActive}></li>
        )
    }
}

export default Li