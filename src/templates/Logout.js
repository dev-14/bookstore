import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Input, Label, Row, Col, Form, ModalBody, Badge, CardBody, CardTitle, Card } from 'reactstrap';



export default function Logout() {
    console.log("logout aaya")
    const [modalOpen, setmodalOpen] = useState(true)
    const [error, seterror] = useState("")

    const navigate = useNavigate()


    async function LogoutButtonClicked() {
        await axios.post("http://localhost:8080/api/v1/logout").then(function(response) {
            let res = response.data
            console.log(res)
            navigate("/login")
        }).catch(function(err) {
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

    return (
        <>
            {console.log("return me aaya")}
            <Modal
                isOpen={modalOpen}
            >
                <ModalBody>
                    <ModalHeader toggle={function noRefCheck() { }}>
                        Logout
                    </ModalHeader>
                    <h5>Are you sure ?</h5>
                    <ModalFooter>

                        <Button
                            color="primary"
                            onClick={() => LogoutButtonClicked()}
                        >
                            Logout
                        </Button>
                        <Button onClick={() => setmodalOpen(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </ModalBody>
            </Modal>
        </>
    )
}