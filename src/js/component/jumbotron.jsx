import React from "react";

export const Jumbotron = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container jumbotron m-3 text-bg-light text-start rounded-2">
                <h1 className="display-4 ms-3 mt-2">A Warm Welcome!</h1>
                <p className="lead ms-3">Hello world! We are delighted to extend a warm welcome to you on behalf of our incredible team. We are thrilled to present to you our team's first-ever landing page made with React, and crafted with meticulous attention to detail 🎉 <br/>It was created with love by Pablo, Rubén & Valentina.</p>
                <a className="btn btn-primary btn-lg mb-5 ms-3" href="#" role="button">Call to action!</a>
            </div>
        </div>
    )
};