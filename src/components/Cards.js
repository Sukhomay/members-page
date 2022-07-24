import React from 'react'
import '../images/man.png'

export default function Cards(props) {
    return (
        <div className="container">
            <div className="card">
                <div class="border">
                    <h2>{props.name}</h2>
                    <h3>{props.por}</h3>
                    <div className="icons">
                        <a href={props.instagram} target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href={props.facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
