import React from 'react';
import "./Presentation.css";
import TeamMember from './TeamMember/TeamMember';
import Button from '../UI/Button/Button';
import Arrow from '../UI/Arrow/Arrow';

const Presentation = ({isOpen, onclick}) => {
    const style = {
        tansition: 'transform .2s ease-out'
    }
    if (isOpen) {
        style.tranform = 'scale(2)'
    }
    return (
        <div className="about text-secondary-color bg-primary-color" style={style}>
            <div className="container d-flex">
                <div className="welcome ">
                    <hr />
                    <h5>Welcome To Under Sky</h5>
                </div>
                <div className="lead d-flex text-center" style={{
                    width: '60%'
                }}>
                    <h2><strong>Under Sky</strong> creates <i>unforgettable</i> events in <i>unique</i> locations.</h2>
                </div>
                <div className={isOpen ? "display-none" : "display-block"}>
                    <Button value={"More"} classStyle={"bg-primary-color text-secondary-color"} onclick={onclick}/>
                    <Arrow color="white" onclick={onclick} direction={"down"} />
                </div>
                <div className={isOpen ? "d-flex text-center show" : "display-none show"}>
                    <div className="description" style={{
                        width: '70%',
                    }}>
                        <p className="text-bold">Under Sky is a purveyor of unique outdoor experien
                            specialising in glamping accommodation, Sperry Tent hire, Tipi Hire and event production.
                        </p>
                        <p className="text-bold">From weddings and music festivals, to corporate retreats and intimate gatherings, 
                            Under Sky provides the infrastructure, service and creative flair to bring your event to life,
                            wherever it may be.
                        </p>
                    </div>
                    <div class="d-flex">
                        <div style={{
                            width: '10%'
                        }}>
                            <hr/>
                            <h5>Our Team</h5>
                        </div>
                        <div className="Members d-flex-row" style={{
                            width: '80%'
                        }}>
                            <TeamMember/>
                            <TeamMember />
                        </div>
                    </div>
                    <div>
                        <Arrow color="white" onclick={onclick} direction={"up"} />
                        <Button value={"Close"} classStyle={"bg-primary-color text-secondary-color"} onclick={onclick}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Presentation;