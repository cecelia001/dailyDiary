import React from 'react';
import "./Home.css"


function Home() {


    return (
        <div className="Home">
            <div className="card" style={{width: 30+'rem'}}>
                <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Diary"/>
                <div className="card-body">
                    <h5 className="card-title">Services</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/services" className="btn btn-primary">See services</a>
                </div>
            </div>

            <div className="card" style={{width: 30+'rem'}}>
                <img src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="card-img-top" alt="Diary"/>
                <div className="card-body">
                    <h5 className="card-title">Appointments</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Schedule appointment</a>
                </div>
            </div>

            <div className="card" style={{width: 30+'rem'}}>
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Diary"/>
                <div className="card-body">
                    <h5 className="card-title">Locations</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/locations" className="btn btn-primary">Find location</a>
                </div>
            </div>

        </div>
    );
}

export default Home;