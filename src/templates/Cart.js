import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Input, Label, Row, Col, Form, ModalBody, Badge, CardBody, CardTitle, Card } from 'reactstrap';
import axios from "axios";
import { useFormik } from "formik";
import UserNav from "../Navs/UserNav";

export default function Cart() {
    const token = localStorage.getItem('token')
    const access = localStorage.getItem('access')
    const [cart, setCart] = useState([])
    const [error, seterror] = useState("")
    async function fetchCart() {
        await axios.get('http://localhost:8080/api/v1/auth/cart/view', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let data = response.data
            console.log(data);
            setCart(data)
        }).catch(function (err) {
            if (err.response) {
                console.log(err.response)
                if (err.response.data.error) {
                    seterror(err.response.data.message)
                }
                console.log(err.response.data.error)
                seterror(err.response.data.error)
            }
        })
    }

    useEffect(() => {
        
        fetchCart();
    }, [])

    return (
        <div>
            <UserNav />
            <Row className="bookCardRow" style={{ height: "300px" }}>
                {cart.map((i) => {
                    return (

                        <>

                            <Col sm="4" className="bookCardCol" style={{ height: "inherit", marginBottom: "15px" }}>
                                <Card className="Card" style={{ height: "inherit" }}>
                                    <CardBody>
                                        <div style={{ height: "180px" }}>
                                            <img src="C:\Users\dsbag\Downloads\book.jpg" alt="place image here" style={{ height: "200px" }} />
                                        </div>
                                        <Row>
                                            <Col>
                                                <CardTitle tag="h5">
                                                    {i.title}
                                                </CardTitle>
                                                <h6 style={{ color: "orange" }}>Price : {i.price}</h6>
                                            </Col>


                                            <Col style={{ textAlign: "end" }}>
                                                {/* <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </CardText> */}
                                                {/* {isUser ? <button className="btn btn-primary addToCartButton" onClick={() => addToCartButtonClicked(i.name)}>Add to Cart</button> : <button className="btn btn-primary addToCartButton" onClick>Edit Book</button>} */}
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>

                                {/* <div> {console.log("heyy")}</div> */}
                                {/* <div>{i.name}</div> */}
                            </Col>
                        </>
                    );
                })}
            </Row>
        </div>
    );
}