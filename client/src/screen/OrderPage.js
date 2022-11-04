import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allOrderAction } from "../action/orderAction";
import Error from "../components/Error";
import SpinnerCircle from "../components/SpinnerCircle";

export default function OrderPage() {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.allOrderReducers);
  const { loading, orders, error } = orderData;
  useEffect(() => {
    dispatch(allOrderAction());
  }, [dispatch]);
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h3>My Orders</h3>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <SpinnerCircle />
          </div>
        )}
        {error && <Error heading={"Error in loading"} content={"Try Latter"} />}
        {orders &&
          orders.map((item) => (
            <div
              className="m-3 shadow-lg p-3 mb-5 bg-white rounded"
              style={{ textAlign: "left" }}
            >
              <h4>{item._id}</h4>
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <h4>Item</h4>
                    <hr />
                    {item.orderItem.map((product) => {
                      return (
                        <div>
                          <p>
                            {product.name} [{product.price}] *{" "}
                            {product.quantity} ={" "}
                            {product.price * product.quantity}
                          </p>
                        </div>
                      );
                    })}
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Address</h4>
                    <hr />
                    <p>Street : {item.shippingAddress.street}</p>
                    <p>City : {item.shippingAddress.city}</p>
                    <p>Country : {item.shippingAddress.country}</p>
                    <p>Pincode : {item.shippingAddress.pincode}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Transcation</h4>
                    <hr />
                    <p>Order Amount : {item.orderAmount}</p>
                    <p>Date : {item.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id : {item.transactionId}</p>
                    <p>Order Id : {item._id}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
      </div>
    </div>
  );
}
