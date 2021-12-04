import React, { useState } from "react";
import { useRouter } from "next/router";
// import Navbar from '../components/_App/Navbar';
import PageBanner from "../components/Common/PageBanner";
// import Footer from '../components/_App/Footer';
import Link from "next/link";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import { redirectUser } from "@/utils/auth";
// import { parseCookies } from 'nookies'
import ReactPayPal from "@/components/Payments/PayPalButton";
import { useToasts } from "react-toast-notifications";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

const Cart = (courses) => {
  // console.log(courses)
  const router = useRouter();
  const { token } = parseCookies();
  const { addToast } = useToasts();
  const [total, setTotal] = useState(0);


  const deleteItem = async (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const url = `${baseUrl}/api/v1/cart/update`;
          const payload = { id: id };
          const response = axios.post(url, payload, {
            headers: { Authorization: token },
          });
          // console.log(response.data);
          // addToast(response.data, {
          //   appearance: "success",
          // });
          // alertContent();
          router.push("/cart");
        } catch (error) {
          //   catchErrors(error, setError)
          console.log(error);
        }
        Swal.fire("Deleted!", "Course deleted from cart!", "success");
      }
    });
    // try {
    //   const url = `${baseUrl}/api/v1/cart/update`;
    //   const payload = { id: id };
    //   const response = await axios.post(url, payload, {
    //     headers: { Authorization: token },
    //   });
    //   console.log(response.data);
    //   addToast(response.data, {
    //     appearance: "success",
    //   });
    //   alertContent();
    //   router.push("/cart");
    // } catch (error) {
    //   //   catchErrors(error, setError)
    //   console.log(error);
    // }
  };

  const sumOfArray = (array) => {
    var sum = array.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  };

  const PriceArray = [];

  // console.log(PriceArray)

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <PageBanner
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
      />

      <div className="cart-area ptb-100">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-8 col-lg-8">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      {courses.courses.length > 0 ? (
                        courses.courses
                          .filter((name) => !name.deleted)
                          .map((item) => {
                            {
                              PriceArray.push(item.course.price);
                            }
                            return (
                              <>
                                <tr>
                                  <td className="product-thumbnail">
                                    <Link href={`/courses/${item.courseId}`}>
                                      <a>
                                        <img
                                          src={item.course.profilePhoto}
                                          alt="item"
                                        />
                                      </a>
                                    </Link>
                                  </td>

                                  <td className="product-name">
                                    <Link href={`/courses/${item.courseId}`}>
                                      <a>{item.course.title}</a>
                                    </Link>
                                  </td>

                                  <td className="product-price">
                                    <span className="unit-amount">
                                      ${item.course.price}
                                    </span>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="subtotal-amount"></span>
                                    <a
                                      href="#"
                                      className="remove"
                                      onClick={(e) => deleteItem(item.id)}
                                    >
                                      <i className="bx bx-trash"></i>
                                    </a>
                                  </td>
                                </tr>
                              </>
                            );
                          })
                      ) : (
                        <p>No course</p>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="cart-buttons">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-sm-7 col-md-7">
                      <div className="shopping-coupon-code">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon code"
                          name="coupon-code"
                          id="coupon-code"
                        />
                        <button type="submit">Apply Coupon</button>
                      </div>
                    </div>

                    <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                      <Link href="/cart">
                        <a className="default-btn">
                          <i className="flaticon-history"></i> Update Cart{" "}
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-4">
                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    {/* <li>
                  Subtotal <span>$800.00</span>
                </li>
                <li>
                  Shipping <span>$30.00</span>
                </li> */}
                    <li>
                      Total <span>${sumOfArray(PriceArray)}</span>
                    </li>
                  </ul>

                  {/* <Link href="#">
                    <a className="default-btn">
                      <i className="flaticon-shopping-cart"></i> Proceed to
                      Checkout <span></span>
                    </a>
                  </Link> */}
                  <ReactPayPal
                    description="Testing"
                    amount={sumOfArray(PriceArray)}
                  >
                    Hello
                  </ReactPayPal>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

Cart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/authentication");
  }
  // const { id } = ctx.query
  const payload = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/api/v1/cart/all`;
  const response = await axios.get(url, payload);
  // console.log(response)
  return response.data;
};

export default Cart;
