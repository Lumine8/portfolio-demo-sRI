import React from "react";
import "./styleSheets/Homepage.css"

class HomePage extends React.Component{
  render() {
    return (
        <div id="Home">

        <div className="homePage">
        <div className="Homecontainer">
        <div className="container_content">
        <div className="container_content_inner">
        <div className="title">
          <h1 className="h1Home">Hello,</h1>
          <h1 className="h1Home">I'm Srishti Gautam</h1>
        </div>
        <div className="par">
        <p className="paraHome">
        UX DESIGNER AND RESEARCHER
        </p>
        </div>
        <div className="btns">
        <button className='btns_more' onClick={() => window.location.replace("/#About")}> See more </button>
        </div>
        </div>
        </div>
         <div className="container_outer_img">
         <div className="img-inner">
         <img src={'https://images.unsplash.com/photo-1640198743729-dac872402fb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}  alt="" className="container_img"/>
               </div>
             </div>
          </div>
        <div className="overlay">
        </div>
        
        </div>

        </div>
    )
  }
}

export default HomePage