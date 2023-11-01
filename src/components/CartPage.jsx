import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../slices/cartSlice";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allcart
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <section className="h-100 gradient-custom Cartpage">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center ">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cart.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {cart.map((data) => (
                  <MDBRow>
                    <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                     <Link to={`/cart/${data.id}`}> <MDBRipple
                        rippleTag="div"
                        rippleColor="light"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <img src={data.imgdata} className="w-100" />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple></Link>
                    </MDBCol>

                    <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                      <p>
                        <strong>{data.rname}</strong>
                      </p>

                      <MDBTooltip
                        wrapperProps={{ size: "sm" }}
                        wrapperClass="me-1 mb-2"
                        title="Remove item"
                      >
                        <MDBIcon
                          fas
                          icon="trash"
                          onClick={() => dispatch(removeItem(data.id))}
                        />
                      </MDBTooltip>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                      <div
                        className="d-flex mb-4"
                        style={{ maxWidth: "300px" }}
                      >
                        <MDBBtn className="px-3 me-2">
                          <MDBIcon
                            fas
                            icon="minus"
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                          />
                        </MDBBtn>

                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={data.quantity}
                          type="number"
                          className="form-control"
                          onChange={() => null}
                        />

                        <MDBBtn className="px-3 ms-2">
                          <MDBIcon
                            fas
                            icon="plus"
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                          />
                        </MDBBtn>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>{data.price}</strong>
                      </p>
                    </MDBCol>
                    <hr className="my-4" />
                  </MDBRow>
                ))}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{totalPrice}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CartPage;
