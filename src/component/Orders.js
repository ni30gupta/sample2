import React, { useEffect, useState } from "react";
import { NavLink, Button, Modal, Table, Row, Col } from "react-bootstrap";
import Header from "./Header";
import { mockOrderSummary } from "./productData";
// import Example from "./Modals";


function Orders() {
    const [orders, setOrders] = useState([]);
    const [modalInfo, setModalInfo] = useState([])
    const [showModal, setShowModal] = useState(false)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        setOrders(mockOrderSummary);
    }, []);

    const rowEvent = (order) => {

        setModalInfo(order)
        toggleTruFalse()
        console.log(order)

    }

    const toggleTruFalse = () => {
        setShowModal(handleShow)
    }

    const ModalContent = () => {

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>orders details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>Order No. :</Col>
                        <Col>{modalInfo.orderRefrence}</Col>
                    </Row>
                </Modal.Body>

                <Modal.Body>
                    <div>
                        {modalInfo.productDetails.map((product) => {
                            return <div className="d-flex justify-content-between">
                                <p> {product.productName} ({product.productQuantity}) </p>
                                <p>{product.productQuantity * product.productPrice}</p>
                            </div>
                        })}

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <Header />

            <div className="container w-75 p-3">
                <Table striped bordered hover responsive="sm lg xl xs">
                    <thead>
                        <tr>
                            <th>orderRefrence #</th>
                            <th>Customer name</th>
                            <th>Order date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr>
                                    <td>
                                        <NavLink onClick={() => rowEvent(order)} style={{ color: "black" }}>
                                            {order.orderRefrence}
                                        </NavLink>
                                    </td>
                                    <td>{order.address.name}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.totalAmount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {show ? <ModalContent /> : null}
            </div>
        </>
    );
}

export default Orders;
