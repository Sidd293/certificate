import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import cookie from "js-cookie";
import { parseCookies } from "nookies";
import { useToasts } from "react-toast-notifications";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const ModalVideo = dynamic(import("react-modal-video"));
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const CoursesDetailsSidebar = ({
  id,
  price,
  profilePhoto,
  lessons,
  duration,
  title,
  loggedInUser
}) => {
  const [display, setDisplay] = React.useState(false)
  const [courseBought, setCourseBought] = React.useState(false)
  const { token } = parseCookies()
  const { addToast } = useToasts();

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  const { enroled_courses, email } = loggedInUser || "";
  const router = useRouter();
  const [enrolled, setEnrolled] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const paymentData = {
    id,
    price,
    email,
  };

  const checkBoughtAlready = () => {
    if(enroled_courses){
      let x = enroled_courses.filter(function (val) {
        return val.courseId === id;
      }).length > 0
      setCourseBought(x)
    }else{
      setCourseBought(false)
    }
  };

  React.useEffect(() => {
    const countEnrolled = async () => {
      const url = `${baseUrl}/api/v1/courses/enrolled/${id}`;
      const response = await axios.get(url);
      setEnrolled(response.data);
    };
    countEnrolled();
    checkBoughtAlready();
  }, []);

  const alertContent = () => {
    MySwal.fire({
      icon: "error",
      title: "Login first",
      text: "You need to be logged in to add to cart!",
    });
  };
  
  const handleCheckout = async (paymentData) => {
    if (token) {
      try {
        const token = cookie.get("token");
        const stripeTotal = Number((price * 100).toFixed(2));
        paymentData.courseId = id;
        paymentData.stripeTotal = stripeTotal;
        const url = `${baseUrl}/api/v1/courses/checkout`;
        const payload = { paymentData };
        const headers = { headers: { Authorization: token } };
        const response = await axios.post(url, payload, headers);
        toast.success(response.data);
      } catch (error) {
        catchErrors(error, window.alert);
      }
    } else {
      alertContent();
      router.push("/authentication");
    }
  };

  return (
    <React.Fragment>
      <div className="courses-details-info">
        <div className="image">
          <img src={profilePhoto} alt={title} />
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-tag"></i> Price
              </span>
              ${price}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-learning"></i> Lessons
              </span>
              {parseInt(lessons)}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time"></i> Duration
              </span>
              {duration}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-web"></i> Per session
              </span>
              ${price / parseInt(lessons)}
            </div>
          </li>
        </ul>

        <div className="btn-box">
          <Link href="/contact">
            <a
              className="default-btn"
              style={{
                background: "transparent",
                color: "#fe4a55",
                border: "1px solid #fe4a55",
              }}
            >
              <i className="flaticon-tag"></i> Enquire Now <span></span>
            </a>
          </Link>
          <br />
          <a href="https://www.picktime.com/brainlox" target="_blank">
            <a className="default-btn">
              <i className="flaticon-webinar"></i> Book a free Demo{" "}
              <span></span>
            </a>
          </a>
          <br />
          
          {loggedInUser && courseBought &&
              <Link href="/my-courses">
                <a
                  className="default-btn"
                  style={{
                    background: "transparent",
                    color: "#fe4a55",
                    border: "1px solid #fe4a55",
                  }}
                >
                  Go to Course <span></span>
                </a>
              </Link>
          }

          {loggedInUser && !courseBought &&
            <CheckoutBtn
              onClick={(e) => handleCheckout(paymentData)}
              handleCheckout={handleCheckout}
              price={price}
              image={profilePhoto}
              name={title}
              className="mt-2"
            />
          }
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesDetailsSidebar;
