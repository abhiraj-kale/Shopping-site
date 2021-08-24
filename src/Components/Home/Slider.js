import React from 'react';
import {Carousel} from "react-bootstrap";

const Slider = (props) => {
    return (
        <div className={"w-100"}>
            <Carousel className={"w-100"}>
                <Carousel.Item>
                    <img
                        className="d-block h-75 w-100"
                        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/6fe7489e-8300-46f9-9ae2-6b02d42f65b01629208170398-SportsShoes_Dk.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/d7f67601-9c65-4556-8e8d-cf2417d261fa1629208024245-Dresses_Dk.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/497f8595-8ff5-4f17-a349-e5d9e4d8dbe51629207922898-DK_Kidswear--2-.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;