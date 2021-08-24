import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Slider from "./Slider";

function Content() {

    let history = useHistory()

    const data = [
        {
            id: 1,
            photo: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15039446/2021/8/5/6d65c7ba-5100-4b28-8566-417532d44bad1628153499192AllenSollyMenPinkSlimFitPrintedCasualShirt1.jpg",
            name: "Allen Solly",
            desc: "Pink Cotton Shirt",
            price: "1199"
        },
        {
            id: 2,
            photo: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590688/2021/7/8/5aa228c5-6bd9-4772-85c2-f70d7bab32e11625743442946-Calvin-Klein-Jeans-Men-Tshirts-6541625743442322-1.jpg",
            name: "Calvin Klein",
            desc: "Black Cotton T-Shirt",
            price: "1299"
        },
        {
            id: 3,
            photo: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11201462/2020/2/24/9cfabd08-b59f-4341-910a-9495f81d0d791582547651526-Anouk-Women-Kurtas-7691582547649446-1.jpg",
            name: "Anouk",
            desc: "Traditional Red Kurta",
            price: "899"
        },
        {
            id: 4,
            photo: "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/productimage/2021/1/15/69cd0b4b-3409-410d-86a7-7e0a46acd2a01610692588684-1.jpg",
            name: "H&M",
            desc: "Sky Blue Fleece Hoodie",
            price: "1499"
        },
    ]
    let content = [];

    const navToProductPage = (product_id) => {
        console.log(history)
        history.push(`/product/${product_id}`)
    }

    data.forEach((key) => [
        content.push(
            <Col>
                <Card style={{width: '18rem'}} onClick={() => navToProductPage(key.id)}>
                    <Card.Img variant="top" src={key.photo}/>
                    <Card.Body>
                        <Card.Title>{key.name}</Card.Title>
                        <Card.Text>
                            {key.desc}
                        </Card.Text>
                        <h6>Price: Rs. {key.price}</h6>
                    </Card.Body>
                </Card>
            </Col>
        )
    ])
    console.log(content)

    return (
        <div>
            <Container className={"h-100 w-100"}>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Shopping Site</h1>
                        <p className="lead">Get the latest fashion designs out there. Created using <label
                            className={"text text-primary"}>React.js</label></p>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid p-4">
                    <div className="container">
                        <p className="lead">Upto 50% Off on Latest Designs!</p>
                    </div>
                </div>
                <Slider/>
                <div className="jumbotron jumbotron-fluid p-5">
                    <div className="container">
                        <p className="display-4">Featured</p>
                    </div>
                </div>

                <Row className={"alert-light"}>

                    {content.map((key) => key)}

                </Row>
            </Container>
        </div>
    )
}

export default Content;