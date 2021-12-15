import React, { useEffect, useState } from "react";
import AdminNav from "../Navs/AdminNav";
import SupervisorNav from "../Navs/SupervisorNav";
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Input, Label, Row, Col, Form, ModalBody, Badge, CardBody, CardTitle, Card } from 'reactstrap';
import { useFormik } from "formik";


export default function Categories() {

    const token = localStorage.getItem('token')
    var access = localStorage.getItem('access_level')
    console.log(access)
    const [modalOpen, setmodalOpen] = useState(false)
    const [category, setcategory] = useState([])
    const [error, seterror] = useState("no errors")


    console.log(access)

    async function returnAllCategories() {
        await axios.get('http://localhost:8080/api/v1/auth/category/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let data = response.data
            console.log(data);
            setcategory(data)
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
        checkUser()
        returnAllCategories();
    }, [])

    function checkUser() {
        if (access === 2) {
            access = 0
        }
    }
    const initialValues = {
        name: "",

    }


    const AddCategoryButtonClicked = async () => {
        console.log("hi");
        console.log(Formik.values.userType);

        var formdata = new FormData();
        formdata.append("name", Formik.values.name);

        console.log("after user define");
        await axios.post(`http://localhost:8080/api/v1/auth/category/create`, formdata, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let res = response.data
            console.log("this");
            console.log(res);
            seterror("")
            setmodalOpen(false)
            returnAllCategories()
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
    const Formik = useFormik(
        {
            initialValues,
            AddCategoryButtonClicked
        }
    )
    // function nav() {
    //     console.log("called")
    //     if (access == 1) {
    //         return (
    //             <>
    //                 <AdminNav />
    //             </>
    //         );
    //     } else if (access == 2) {
    //         return (
    //             <>
    //                 <SupervisorNav />
    //             </>
    //         );
    //     } else {

    //     }
    // }




    return (
        <>

            <div>
                {access ? <AdminNav /> : <SupervisorNav />}
                <br />
                <div style={{textAlign: 'end', paddingRight: "30px", marginBottom: "15px"}}>
                    {access ? <Button color="primary" onClick={() => setmodalOpen(true)}>Create New Category</Button> : <div></div>}
                </div>

                {/* <hr /> */}
                <Row>
                    {category.map((i) => {
                        return (

                            <>
                                <Col sm="6">
                                    <Card style={{marginBottom: "15px"}}
                                    >
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {i.name}
                                            </CardTitle>

                                            {/* <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </CardText> */}
                                            <Button>
                                                View Books
                                            </Button>
                                        </CardBody>
                                    </Card>
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
                            Create User
                        </ModalHeader>
                        <Form inline>
                            <br />

                            <FormGroup floating>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Category name"
                                    type="text"
                                    value={Formik.values.name}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="name">
                                    Category Name
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
                                onClick={() => AddCategoryButtonClicked()}
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


        </>
    );

}