import React from "react";
import { useParams, Link } from 'react-router-dom'
import "./styleSheets/Aboutme.css"

export default function AboutMe(){
        let { id } = useParams()
        return(
            <>
            <div id="About" className="About-Main">{id}
            <div className="Aboutme-container">
            <div id="selfme">
                <h1>Lorem</h1>
                <h5>ABOUT ME</h5>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>
                <br/>
                <p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>
                <br/>
                <button onClick={() => window.location.replace("/#Projects")}>Projects</button>

            </div></div></div>
            </>
        )
}

