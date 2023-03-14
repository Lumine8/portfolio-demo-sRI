import React from "react";
import { useParams } from "react-router-dom";
import HomePage from "./HomePage";
import Aboutme from "../Components/AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import "./styleSheets/LineBreak.css"

export default function Fullpage(){
    let { id} = useParams();
    return(
        <>
        
        <HomePage/>

        <div style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
        <hr id="three" data-symbol="BREAK"/>
        </div>
        {id}
        <Aboutme id={'About'}/>

        <div style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
        <hr id="three" data-symbol="BREAK"/>
        </div>
        
        <Projects id={'Projects'}/>
        
        <div style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
        <hr id="three" data-symbol="BREAK"/>
        </div>
        
        <Contact id={'Contacts'}/>

        </>
    )
}