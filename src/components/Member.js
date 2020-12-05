import React/*, { useState }*/ from 'react';
import "./Member.css";


function Member(props) {

    return (
        <>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="person text-center">
                    <img src={props.photo} alt={`${props.name}`} className="img-fluid img-member  w-75 mb-4"/>
                    <h4>{props.name}</h4>
                    <p className="position text-muted mb-1">{props.role}</p>
                    {props.linkedIn !== "" ?
                        <a href={props.linkedIn} target="_blank"
                           rel="noopener noreferrer">
                            <span className="fa-stack fa-2x" style={{fontSize: "15px"}}>
                                <i className="fas fa-circle fa-stack-2x" style={{color: "black"}}></i>
                                <i className="fab fa-linkedin-in fa-stack-1x" style={{color: "#fff"}}></i>
                            </span>
                        </a> :
                        <span className="fa-stack fa-2x" style={{fontSize: "15px"}}>
                            <i className="fas fa-circle fa-stack-2x" style={{color: "#cccccc"}}></i>
                            <i className="fab fa-linkedin-in fa-stack-1x" style={{color: "#fff"}}></i>
                        </span>
                    }
                </div>
            </div>
        </>
    );


}

export default Member;