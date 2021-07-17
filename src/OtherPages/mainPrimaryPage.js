import React from "react"
import "./mainPrimaryPage.css"

function MainPrimaryPage (props) {
    return (
        <>
            <div id="headerMainPrimaryPage">
                {props.textHeader}
            </div>
            <div id="textMainPrimaryPage">
                {props.text}
            </div>
            <div id="h1PrimaryPage">
                {props.h1}
            </div>
        </>
        
    )
}

export default MainPrimaryPage