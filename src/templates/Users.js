import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Input, Label, Form, ModalBody, Badge } from 'reactstrap';
import AdminNav from "../Navs/AdminNav";
import { useFormik } from "formik";


export default function Users() {

    var token = localStorage.getItem('token')
    const [modalOpen, setmodalOpen] = useState(false)
    const [error, seterror] = useState("no errors")
    // const [userType, setuserType] = useState("")

    const AddUserButtonClicked = async () => {
        console.log("hi");
        console.log(Formik.values.userType);

        var formdata = new FormData();
        formdata.append("email", Formik.values.emailAddress);
        formdata.append("first_name", Formik.values.firstName);
        formdata.append("last_name", Formik.values.lastName);
        formdata.append("password", Formik.values.password);
        formdata.append("confirmpassword", Formik.values.confirmpassword);

        var user = ""

        if (Formik.values.userType === "admin") {
            user = "admin"
        }
        else if (Formik.values.userType === "supervisor") {
            user = "supervisor"
        }
        console.log("after user define");
        let response = await axios.post(`http://localhost:8080/api/v1/auth/${user}/create`, formdata, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            let res = response.data
            console.log("this");
            console.log(res);
            seterror("")
            setmodalOpen(false)
        }).catch(function (err) {
            if (err.response) {
                console.log(err.response)
                console.log(err.response.data.error)
                seterror(err.response.data.error)
            }
        })

        //console.log(res.error)
        // if (res.code === 200) {
        //     setmodalOpen(false)
        // } else {
        //     seterror(res.error)
        // }
        console.log("end of code");
    }

    const initialValues = {
        userType: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmpassword: ""
    }
    const Formik = useFormik(
        {
            initialValues,
            AddUserButtonClicked
        }
    )

    return (
        <>
            <AdminNav />
            <br />
            <div>
                <Button
                    color="primary"
                    onClick={() => setmodalOpen(true)}
                >
                    Create New User
                </Button>
                <Modal
                    isOpen={modalOpen}
                >
                    <ModalBody>
                        <ModalHeader toggle={function noRefCheck() { }}>
                            Create User
                        </ModalHeader>
                        <Form inline>
                            <br />
                            <FormGroup>

                                <Input
                                    id="selectUserType"
                                    name="userType"
                                    type="select"
                                    // onSelect={}
                                    value={Formik.values.userType}
                                    onChange={Formik.handleChange}
                                >
                                    <option name="default" value="">Select Type Of User</option>
                                    <option name="admin" value="admin">Admin</option>
                                    <option value="supervisor">Supervisor</option>
                                </Input>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First name"
                                    type="text"
                                    value={Formik.values.firstName}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="firstName">
                                    First Name
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last name"
                                    type="text"
                                    value={Formik.values.lastName}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="lastName">
                                    Last Name
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="emailAddress"
                                    name="emailAddress"
                                    placeholder="Email"
                                    type="email"
                                    value={Formik.values.emailAddress}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="emailAddress">
                                    Email
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={Formik.values.password}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="password">
                                    Password
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="confirmPassword"
                                    name="confirmpassword"
                                    placeholder="Confirm Password"
                                    type="password"
                                    value={Formik.values.confirmpassword}
                                    onChange={Formik.handleChange}
                                />
                                <Label for="confirmPassword">
                                    Confirm Password
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
                                onClick={() => AddUserButtonClicked()}
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
