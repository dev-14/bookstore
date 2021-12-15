import { render } from "@testing-library/react";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom';
import React, {} from "react";

export default function Register() {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setlastName] = useState('')
    // const [emailAddress, setemailAddress] = useState('')
    // const [password, setpassword] = useState('')
    // const [confirmpassword, setconfirmpassword] = useState('')
    // const [redirect, setRedirect] = useState(false)
    const navigate = useNavigate()
    const initialValues = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmpassword: ""
    }


    const submit = async (e) => {
        e.preventDefault()
        
        var formdata = new FormData();
        formdata.append("email", Formik.values.emailAddress);
        formdata.append("first_name", Formik.values.firstName);
        formdata.append("last_name", Formik.values.lastName);
        formdata.append("password", Formik.values.password);
        formdata.append("confirmpassword", Formik.values.confirmpassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        let response = await fetch("http://localhost:8080/api/v1/register", requestOptions)
        let data = await response.json()
        console.log(data);
            if (data.code === 200) {
                navigate("/login")
                render(<>
                <div>
                    Success..!!!
                </div>
                </>)
            } else {
                render(<>
                <div>
                    Error {data.code}
                </div>
                </>)
            }
            // .then(response => response.text())
            // .then(result => renderResult(result))
            // .catch(error => console.log('error', error));

            
        //.then(data => this.setState({ creditcards: data.creditcards }))
        //.catch(error => this.setState({ error }));
        //console.log(response)
    }
    const Formik = useFormik(
        {
            initialValues,
            submit
        }
    )

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input type="text" name="firstName" className="form-control" id="floatingInput" value={Formik.values.firstName}
                        onChange={Formik.handleChange} />
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" name="lastName" className="form-control" id="floatingInput" value={Formik.values.lastName}
                        onChange={Formik.handleChange} />
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" name="emailAddress" className="form-control" id="floatingInput" value={Formik.values.emailAddress}
                        onChange={Formik.handleChange} />
                    <label htmlFor="floatingInput">Email Address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" className="form-control" id="floatingInput" value={Formik.values.password}
                        onChange={Formik.handleChange} />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="confirmpassword" className="form-control" id="floatingInput" value={Formik.values.confirmpassword}
                        onChange={Formik.handleChange} />
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                <div></div>
            </form>
        </div>
    );
}

