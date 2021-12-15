import React, { useState } from 'react';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Row, Col, Form } from 'reactstrap';

export default function Login() {
    const [error, seterror] = useState("")
    const initialValues = {
        emailAddress: "",
        password: "",
    }
    const navigate = useNavigate()
    const loginButton = async (e) => {
        e.preventDefault()
        //console.log("hi");
        var formdata = new FormData();
        formdata.append("email", Formik.values.emailAddress);
        formdata.append("password", Formik.values.password);
        console.log(formdata)
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        //var obj = ""
        let response = await axios.post("http://localhost:8080/api/v1/login", formdata)
        let data = await response.data
        console.log(data);
        //let data = await response.text();
        // if (data.code === 200) {
        //     console.log("success");
        // }
        console.log(data);
        //console.log(data.code);
        var token = data.message
        console.log(token);
        localStorage.setItem('token', token)
        if (data.code === 200) {
            localStorage.setItem('access_level', data.AccessLevel)
            if (data.AccessLevel === "1") {
                navigate("/adminDashboard")
            }
            else if (data.AccessLevel === "2") {
                navigate("/supervisorDashboard")
            }
            else if (data.AccessLevel === "3") {
                navigate("/userDashboard")
            }
            else {
                seterror("Unidentified access level")
            }
        }
        else {
            seterror("Couldnt Sign In")
        }

        // .then(response => {
        //     console.log("line 1" + response.data);
        // })
        // .then(result => {
        //     console.log(result);
        //     tokenPass(result)
        // })
        // .catch(error => console.log('error', error));
        //console.log(obj);


    }
    // const usercheck = async() => {
    //     let response = await axios.get("http://localhost:8080/api/v1/checkuser")
    //     console.log(response);
    //     let resp = await response.data
    //     if (resp.status == "admin"){
    //         navigate("/adminDashboard")
    //         console.log("admin aaya");
    //     } else if (resp.status == "supervisor") {
    //         navigate("/supervisorDashboard")
    //         console.log("supervisor aaya");
    //     } else {
    //         navigate("/userDashboard")
    //         console.log("user aaya");
    //     }
    // }

    // const onRegisterClick = () => {
    //     navigate("/register")
    // }

    const Formik = useFormik(
        {
            initialValues,
            loginButton
        }
    )

    return (
        <>
            <Form onSubmit={loginButton} >
                <Row className="md-auto" align="center">
                    <div>
                        <Col md="4" className="md-auto">
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input type="email" name="emailAddress" className="form-control" id="floatingInput" placeholder="name@example.com" value={Formik.values.emailAddress}
                                    onChange={Formik.handleChange} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={Formik.values.password}
                                    onChange={Formik.handleChange} />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                        </Col>
                    </div>

                </Row>
                <Row className="md-auto" align="center">
                    <Col md="4"></Col>
                    {/* <div className="" align="left"> */}
                        <Col md="4" className="md-auto" align="left">
                            <a href="/register" align="left">Not Registered? Register Now</a>
                        </Col>
                    {/* </div> */}
                </Row>
            </Form>
            <div> {error} </div>
        </>
    );
}
