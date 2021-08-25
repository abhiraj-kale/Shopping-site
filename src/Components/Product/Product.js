import React from 'react';
import {useHistory} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import {Breadcrumb} from "react-bootstrap";
import image from './shopping-bag-128.png'

function Product(props) {

    const history = useHistory()

    const parse_query_string = (query) => {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    }

    const url = parse_query_string((props.location.search).substring(1))
    console.log(url)
    console.log(url.id)
    console.log(url.photo)
    console.log(url.name)
    console.log(url.desc)
    console.log(url.price)

    const changeBtnColour = (e) => {
        const x = document.getElementsByClassName("size-btn");
        let i;
        for (i = 0; i < x.length; i++) {
            e.target.style.color = "yellow"
        }
        e.target.style.color = "red"
    }

    const newDate = new Date(new Date().getTime()+(5*24*60*60*1000))
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate)

    return (
        <div className={" w-100 m-auto d-flex flex-column text-center"}>
            <Header/>
            <div className={"h-100 w-75 m-auto row"}>
                <div className={"col-sm m-5"}>
                    <Breadcrumb className={"text-center"}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="" onClick={() => history.goBack()}>
                            Featured
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>New Arrival</Breadcrumb.Item>
                    </Breadcrumb>
                    <img src={url.photo} alt={url.name} className={"shadow"}/>
                </div>
                <div className={"col-sm m-5 text-start"}>
                    <div className={"display-4"}>
                        {
                            url.name
                        }
                    </div>
                    <div className={"h-2 m-2 text-muted"}>
                        {
                            url.desc
                        }
                    </div>
                    <hr/>
                    <div className={"m-2"}>
                        <span className={"h2"}>
                            Rs.
                            {
                                url.price
                            }
                        </span>
                        <span className={"fs-3 m-2 text-muted text-decoration-line-through"}>
                            <i>
                                Rs.
                                {
                                    url.price * 2
                                }
                            </i>
                        </span>
                        <span className={"fs-4 m-2"} style={{color: "orange"}}>
                            <i>
                                (50% OFF)
                            </i>
                        </span>
                    </div>
                    <div className={"m-2 text-success"}>
                        inclusive of all taxes
                    </div>
                    <div className={"fs-5 m-2"}>
                        SELECT SIZE
                    </div>
                    <div className={""}>
                        <div className={"btn btn-light btn-outline-dark rounded-circle m-2 size-btn"} onClick={changeBtnColour}>28</div>
                        <div className={"btn btn-light btn-outline-dark rounded-circle m-2 size-btn"} onClick={changeBtnColour}>30</div>
                        <div className={"btn btn-light btn-outline-dark rounded-circle m-2 size-btn"} onClick={changeBtnColour}>32</div>
                        <div className={"btn btn-light btn-outline-dark rounded-circle m-2 size-btn"} onClick={changeBtnColour}>34</div>
                    </div>
                    <div className={"m-2"}>
                        <div className="buttons d-flex flex-row">

                            <button className="btn btn-danger cart-button px-5">

                                <img src={image} height={30} alt={""}/>
                                <label className={"m-2"}>Add to Bag</label>
                            </button>
                        </div>
                    </div>
                    <div className={"m2"}>
                        <span className={"fs-5 m-2"}>Rs. { url.price }</span>
                        <span className={"fs-5 m-2 text-muted text-decoration-line-through"}>
                            <i>
                                Rs.
                                {
                                    url.price * 2
                                }
                            </i>
                        </span>
                    </div>
                    <div>
                        <span className={"fs-6 m-2 text-muted"}>
                            Get it by
                            {
                                " "+da+" "+mo+", "+ye
                            }
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Product;