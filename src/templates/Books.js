import React, { useEffect, useState } from "react";
// import { render } from "@testing-library/react";
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Input, Label, Row, Col, Form, ModalBody, Badge, CardBody, CardTitle, Card } from 'reactstrap';
import axios from "axios";
import { useFormik } from "formik";
import UserNav from "../Navs/UserNav";
import AdminNav from "../Navs/AdminNav";
import SupervisorNav from "../Navs/SupervisorNav";

export default function Books() {
    const [books, setbooks] = useState([]);
    const [modalOpen, setmodalOpen] = useState(false)
    const [error, seterror] = useState("")
    const [isUser, setIsUser] = useState(0)
    //const [isData, setIsData] = useState(false)
    var token = localStorage.getItem('token')
    var access = localStorage.getItem('access_level')
    console.log(access)
    console.log(isUser)

    const initialValues = {
        name: "",
        categoryId: 0,
        price: ""
    }

    var pustak = []
    console.log(token);
    const returnAllBooks = async () => {
        console.log("went inside func");
        await axios.get('http://localhost:8080/api/v1/auth/books/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let data = response.data
            console.log(data);
            setbooks(data)
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

    function checkUser() {


        if (access == 2) {
            console.log("access 3 hai");
            access = 0
        } else if (access == 3) {
            console.log("access 3 hai");
            setIsUser(1)
        }
    }

    async function AddBookButtonClicked() {

        var formdata = new FormData();
        formdata.append("name", Formik.values.name);
        formdata.append("category_id", Formik.values.categoryId);
        formdata.append("price", Formik.values.price)

        await axios.post(`http://localhost:8080/api/v1/auth/books/create`, formdata, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let res = response.data
            console.log("this");
            console.log(res);
            seterror("")
            setmodalOpen(false)
            returnAllBooks()
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

    // const displayBooks = (data) => {
    //     // const element = <h1>Hello, world {data.name}</h1>;
    //     // ReactDOM.render(element, document.getElementById('root'));
    //     console.log("called");
    //     return (
    //         <div>

    //         </div>
    //     );
    // }

    useEffect(() => {
        checkUser()
        returnAllBooks();
    }, [])

    const Formik = useFormik(
        {
            initialValues,
            AddBookButtonClicked
        }
    )

    //    const addToCartButtonClicked=async(title)=> {
    //         var formdata = new FormData();
    //         console.log(title);
    //         formdata.append('title', title)
    //         var headers = new Headers();
    //         headers.append("Content-Type", "application/json");
    //         headers.append("Authorization", `Bearer ${token}`);
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-type':'application/json',
    //             },
    //             body: formdata,
    //             redirect: 'follow'
    //         };
    //         console.log("adding to cart");
    //         //console.log("dev" +JSON.stringify(i));
    //         let response = await fetch("http://localhost:8080/api/v1/auth/cart/add", requestOptions);
    //         let data = response.json()
    //         console.log(data);
    //     }

    //using axios
    const addToCartButtonClicked = async (title) => {
        var formdata = new FormData();
        console.log(title);
        formdata.append('title', title)
        //console.log(headers);
        console.log("adding to cart");
        let response = await axios.post("http://localhost:8080/api/v1/auth/cart/add", formdata, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        let resp = response.data
        console.log(resp);
        // render(
        //     <>
        //         <h6>Added to cart</h6>
        //     </>
        // )
    }

    return (
        <div>
            {isUser ? <UserNav /> : access ? <AdminNav /> : <SupervisorNav />}

            {/* <h1>Home</h1> */}
            {/* {pustak}
            
            {console.log("heyy")} */}
            {/* {console.log("data " + data)} */}
            {console.log(books)}
            <br />
            <div style={{ textAlign: 'end', paddingRight: "30px", marginBottom: "15px" }}>
                {isUser ? <div></div> : <Button color="primary" onClick={() => setmodalOpen(true)}>Create New Book</Button>}
            </div>
            <Row className="bookCardRow" style={{ height: "300px" }}>
                {books.map((i) => {
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
                                                    {i.name}
                                                </CardTitle>
                                                <h6 style={{ color: "orange"}}>Price : {i.price}</h6>
                                            </Col>


                                            <Col style={{textAlign: "end"}}>
                                                {/* <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </CardText> */}
                                                {isUser ? <button className="btn btn-primary addToCartButton" onClick={() => addToCartButtonClicked(i.name)}>Add to Cart</button> : <button className="btn btn-primary addToCartButton" onClick>Edit Book</button>}
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
            <Modal
                isOpen={modalOpen}
            >
                <ModalBody>
                    <ModalHeader toggle={function noRefCheck() { }}>
                        Create Book
                    </ModalHeader>
                    <Form inline>
                        <br />

                        <FormGroup floating>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Name of the book"
                                type="text"
                                value={Formik.values.name}
                                onChange={Formik.handleChange}
                            />
                            <Label for="name">
                                Book Name
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="categoryId"
                                name="categoryId"
                                placeholder="Category Id"
                                type="text"
                                value={Formik.values.categoryId}
                                onChange={Formik.handleChange}
                            />
                            <Label for="categoryId">
                                Category Id
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="price"
                                name="price"
                                placeholder="Price"
                                type="text"
                                value={Formik.values.price}
                                onChange={Formik.handleChange}
                            />
                            <Label for="price">
                                Price
                            </Label>
                        </FormGroup>

                    </Form>
                    <div>
                        <Badge color="danger">
                            {error}
                        </Badge>
                    </div>
                    <ModalFooter>

                        <Button
                            color="primary"
                            onClick={() => AddBookButtonClicked()}
                        >
                            Create
                        </Button>
                        <Button onClick={() => setmodalOpen(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </ModalBody>
            </Modal>
        </div>
    );
}