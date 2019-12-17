import React from 'react';
import RoundedImage from '../UI/RoundedImage/RoundedImage';
import Button from '../UI/Button/Button';
import Carousel from '../UI/Carousel/Carousel';
import Option from './Options/Options';
import Arrow from '../UI/Arrow/Arrow';

const Service = ({title, content, isOpen, onclick}) => {
    return (
        <div className="d-flex">
            <div className="d-flex-row">
                <div className="d-flex">
                    <div className="container d-flex-row" style={{
                        width: '80%'
                    }}>
                        <div>
                            <div className="d-flex" style={{
                                width: '52%',
                                textAlign: 'left',
                            }}>
                                <h3 className="text-bold"><strong>{title}</strong></h3>
                                <p style={{
                                    marginLeft: '10px',
                                    marginTop: '20px'
                                }}>{content}</p>
                            </div>
                        </div>
                        <RoundedImage src={"/images/avatar.png"} alt={"Avatar"} />
                    </div>
                    <div className={isOpen ? "display-none" : "display-block"}>
                        <Button value={"More"} classStyle={"bg-secondary-color text-black-color"} onclick={onclick}/>
                        <Arrow color={"black"} onclick={onclick} direction={"down"} />
                    </div>
                </div>
            </div>
            <div className={isOpen ? "d-flex margin-top-5 margin-bottom-5 show" : "display-none show"}>
                <Carousel />
                <div className="d-flex-row" style={{
                    width: '90%'
                }}>
                    <Option />
                    <Option />
                    <Option />
                </div>
                <div>
                    <h5>Please contact us for more details</h5>
                </div>
                <div className="margin-top-5">
                    <hr className="hr-black" />
                    <p>More Info? Visit the Sperry Tents Melbourne website</p>
                </div>
                <div>
                    <button class="rounded-btn">Go</button>
                </div>
                <div className="margin-top-5">
                    <hr className="hr-black" />
                    <p>More Info ?</p>
                </div>
                <div>
                    <button class="rounded-btn">Contact US</button>
                </div>
                <div>
                    <Arrow color={"black"} onclick={onclick} direction={"up"} />
                    <Button value={"Close"} classStyle={"bg-secondary-color text-black-color"} onclick={onclick}/>
                </div>
            </div>
        </div>
    )
};

export default Service;