import React,{Component} from "react";
import "./appPageHome.css"

import Header from "./header"
import Main from "./main"
// import Footer from "./footer"


class AppPageHome extends Component {

    constructor() {
        super()
        this.state ={
            background:""
        }
    }

    render() {
        
        return(
            <>
                <div className="mainPageShell">
                    <Header pageNum="01"/>
                    <span id="mainCompShell">
                        <Main h1="We will make your adventure unforgettable" />
                    </span>
                    
                </div>
                <div id="downPage">
            
                </div>
            </>
        )
    }
    
}


export default AppPageHome