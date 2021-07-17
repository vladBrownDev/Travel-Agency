import React, {Component} from "react";
import "./header.css"

class Header extends Component {
    // constructor () {
    //     super()
    //     this.state = {
    //         pageNum:"01"
    //     }
    // }

    render () {
        return (
            <>
    
                <header id="home">
                    <div id="leftSideHeader">
                        <span id="pageNumber">01</span>
                        <span>Company name</span>
                    </div>
                    <div id="rightSideHeader">
                        <span>About</span>
                        <span>Contact us</span>
                        <span id="halfBurger">
                            
                        </span>
                    </div>
                </header>
                
    
            </>
        )
    }
    
}



export default Header