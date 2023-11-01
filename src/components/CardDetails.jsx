import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../slices/cartSlice";
import {
  removeItem,
} from "../slices/cartSlice";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { Id } = useParams(); // Extract 'Id' from the URL parameters
  // console.log("prr", Id);

  // Get 'cart' and 'totalPrice' from the Redux store
  const { cart, totalPrice } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  // Trigger 'getCartTotal' action when the 'cart' changes
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
      </div>

      {/* Filter the 'cart' array to display specific items with matching 'Id' */}
      {cart.filter((item) => item.id == Id).map((data) => (
        <section className="container mt-3" key={data.id}>
          <div className="iteamsdetails">
            <div className="items_img">
              <img
                src={data.imgdata}
                alt=""
                style={{ height: "16rem" }}
                className="p-3"
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Product:</strong> {data.rname}
                    </p>
                    <p>
                      <strong>Price:</strong> ₹{data.price}
                    </p>
                    <p>
                      <strong>Dishes:</strong> {data.address}
                    </p>
                    <p>
                      <strong>Total:</strong> ₹{totalPrice}
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating:</strong>{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px", // Fixed missing 'px'
                        }}
                      >
                        3.5 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review:</strong>{" "}
                      <span>1176+ orders placed from here recently</span>
                    </p>
                    <p>
                      <strong>Remove:</strong>{" "}
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: "15px", // Fixed missing 'px'
                            cursor: "pointer",
                            marginLeft: "6px", // Fixed missing 'px'
                          }}
                          onClick={() => dispatch(removeItem(data.id))}
                        ></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CardDetails;
