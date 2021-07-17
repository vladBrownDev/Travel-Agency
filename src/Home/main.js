import React,{Component} from "react";
import ReactDOM from 'react-dom'
import "./main.css";

import MainPrimaryPage from "../OtherPages/mainPrimaryPage";

class Main extends Component {

    constructor (props) {
        super(props);

        this.state = {
            classBag:"activeLi",
            classYacht:"",
            classAnt:"",
            classPlane:""
        }

        //shitty code start
       

        this.setActive = (page) => {
            if(page==="bag" && this.state.bag !== "activeLi") {
                ReactDOM.render(<MainPrimaryPage h1="We will make your adventure unforgettable"/>, document.querySelector("main"))
                setTimeout(() => {document.querySelector(".mainPageShell").className += " invisible";}, 200)
                document.querySelector(".mainPageShell").className = "mainPageShell pic1";
                this.setState((state) => {
                    if(state.classBag !== "activeLi") {
                        return{classBag: "activeLi",
                        classYacht:"",
                        classAnt:"",
                        classPlane:""}
                    }
                    
                })
            }
            if(page==="yacht" && this.state.yacht !=="activeLi") {
                ReactDOM.render (<MainPrimaryPage textHeader="Yacht travel" text="You want to travel the world, and you want to do it in style. A yacht is the perfect way to see things you have never seen before. Sound appealing? Of course it does. Nowhere else does luxury meet travel quite as perfectly as when you’re watching the sun set from the deck of your private yacht in the middle of the Mediterranean Sea."/>, document.querySelector("main"))
                setTimeout(() => {document.querySelector(".mainPageShell").className += " invisible";}, 200)
                document.querySelector(".mainPageShell").className = "mainPageShell pic2";
                // console.log(document.querySelector("#mainPageShell").style)
                this.setState((state) => {
                    if(state.classYacht !== "activeLi") {
                        
                        return{classBag: "",
                        classYacht:"activeLi",
                        classAnt:"",
                        classPlane:""}
                    }
                    
                })
            }
            if(page==="ant") {
                this.setState((state) => {
                    ReactDOM.render(<MainPrimaryPage textHeader="You Can Travel to Antarctica" text="Antarctica.  The 7th Continent.  The land mass at the bottom of the globe, completely encased in ice.  Its remote wilderness featured on nature documentaries and in our science and history books.  And for those reasons, it might seem somewhat abstract and hard to reach.  Perhaps even impossible.  But it’s not."/>, document.querySelector("main"))
                    setTimeout(() => {document.querySelector(".mainPageShell").className += " invisible";}, 200)
                    document.querySelector(".mainPageShell").className = "mainPageShell pic3";
                    if(state.classAnt !== "activeLi") {
                        return{classBag: "",
                        classYacht:"",
                        classAnt:"activeLi",
                        classPlane:""}
                    }
                    
                })
            }
            if(page==="plane") {
                ReactDOM.render(<MainPrimaryPage textHeader="Plan your holiday" text="Several gliding clubs around the country offer instruction courses, for would-be glider pilots, or you can pay to go on a flight purely as a joy-riding passenger. Omarama is one of the country’s most famous gliding areas - on a trial flight you can experience the beauty of soaring over the lakes and mountains of the Mackenzie Country."/>, document.querySelector("main"))
                setTimeout(() => {document.querySelector(".mainPageShell").className += " invisible";}, 200)
                document.querySelector(".mainPageShell").className = "mainPageShell pic4";
                this.setState((state) => {
                    if(state.classPlane !== "activeLi") {
                        return{classBag:"",
                        classYacht:"",
                        classAnt:"",
                        classPlane:"activeLi"}
                    }
                    
                })
            }
        }

        //shitty code ends

        let primaryPageProps = {
            yacht: {
                h3FirstSection : "A yacht is the perfect way to see things you have never seen before",
                textBodyFstSection : "The hardest part of getting ready to sail across the globe is planning. Yes, rough seas are dangerous. Yes, dealing with an electrical failure can be frightening. Yes, pirates do exist. These all pale in comparison to the overwhelming feeling many people get when considering how to plan a world vacation.So make sure to prep, prep some more, prep a little more, and finally prep a bit more. This means taking sailing classes, of course, but also learning about everything boating related. We’re talking about the oceans, the weather, boats in general, and your boat in particular.This type of comprehensive prep work isn’t easy. It’s best to take it one step at a time. Set aside a day and read a sailing guide for beginners. Then check out a guide on how tides work. Finish off your day by researching local sailing instructors and finding one to work with.This type of piecemeal prep will keep your momentum going without being too much to tackle at any given moment.   The level of precision on already existing marine technology is nothing short of mind-blowing. Add what’s currently being developed into the mix and you have a formula for easier and safer yachting. Sounds pretty good, right?"
            }
        }

        
        this.setActiveBag = () => {
            this.setActive("bag")
            ReactDOM.render (<>01</>,document.getElementById("pageNumber"))
        } 
        this.setActiveYacht = () => {
            this.setActive("yacht")
            
            ReactDOM.render (<>02</>,document.getElementById("pageNumber"))
            
            
            
            // let bindedChangePage = changePage.bind(Header)
            // bindedChangePage()
        } 
        this.setActiveAnt = () => {
            this.setActive("ant")
            ReactDOM.render (<>03</>,document.getElementById("pageNumber"))
        }
        this.setActivePlane = () => {
            this.setActive("plane")
            ReactDOM.render (<>04</>,document.getElementById("pageNumber"))
        }
        
        
    }
    render () {
        

        return (
        <>
            <main>
                <MainPrimaryPage textHeader={this.props.textHeader} text={this.props.middleText} h1={this.props.h1}/>
            </main>
            <footer>
                <span>
                    Travel Agency
                </span>
                <ul>
                    <li className={this.state.classBag} onClick={this.setActiveBag}></li>
                    <li className={this.state.classYacht} onClick={this.setActiveYacht}></li>
                    <li className={this.state.classAnt} onClick={this.setActiveAnt}></li>
                    <li className={this.state.classPlane} onClick={this.setActivePlane}></li>
                </ul>
            </footer>
            
        </>
    )
        
    }
}




export default Main