import React from "react";

function Cards() {
    const cardList = [
        { title: "First Title" },
        { title: "Second Title" },
        { title: "Third Title" },
        { title: "Fourth Title" }
    ];
    
    return (
        <div className="row">
            {cardList.map((card, index) => (
                <div className="col-12 col-md-3" key={index}>
                    <div className="card m-1 p-0" style={{ width: '100%' }}>
                        <img src="https://img.europapress.es/fotoweb/fotonoticia_20210430172721_420.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;