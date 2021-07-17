import React, {Component} from "react"
import "./downPage.css"
import Main from "../Home/main"


function DownPage (props) {
    return (
        <>
        <div id="downMain">
            <div id='downShell'>
                <section>
                    <span>{props.h3FirstSection}</span>
                    <span>{props.textBodyFstSection}</span>
                </section>
            </div>
        </div>
        
        </>
    )
}

export default DownPage