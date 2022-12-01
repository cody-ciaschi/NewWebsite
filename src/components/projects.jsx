import { Card, Container, Row, Col } from "react-bootstrap";
import Pacmen from "../assets/pacmen.png";
import Eyes from "../assets/eyes.png";
import BusTracker from "../assets/busTracker.png"

export default function Projects() {
    return (
        <>
        <div className="container-fluid">
            <p className="text-center">
                I have been taking a course through MIT xPRO targeted at using the MERN Stack for Full Stack Web Development. By the end of the course, I will be able to take on Full-Stack Web Developement projects using MongoDB, ExpressJS, ReactJS, and NodeJS. On this page are a couple of example projects I have worked/am working on. As I complete more projects, they will be added here, so come back soon!
            </p>
        </div>

        <br />

        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card m-auto text-center" style={{width: "25em",}}>
                        <img className="card-img-top" src={Pacmen} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">PacMen</h5>
                        <p className="card-text">A simple in-browser game that creates a bunch of PacMen and lets them run around the screen.</p>
                        <a href="https://github.com/cody-ciaschi/PacMen" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            Github
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-auto text-center" style={{width: "25em",}}>
                        <img className="card-img-top" src={Eyes} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Moving Eyes</h5>
                        <p className="card-text">A browser animation that has eyes that follow your mouse around the screen.</p>
                        <a href="https://github.com/cody-ciaschi/MovingEyes" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            Github
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-auto text-center" style={{width: "25em",}}>
                        <img className="card-img-top" src={BusTracker} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Real Time Bus Tracker</h5>
                        <p className="card-text">Tracks buses on bus line 1 in boston using the MBTA API and Mapbox.</p>
                        <a href="https://github.com/cody-ciaschi/RealTimeBusTracker" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            Github
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}