import React from 'react';
import Transaction from '@/components/Brainlox Coin/Transaction';
import PageBanner from '@/components/Common/PageBanner';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import Cookies from 'js-cookie';
import { parseCookies } from "nookies";
import ReactPayPal from '@/components/Payments/PayPalButton';
import Link from 'next/link';
import { redirectUser } from "@/utils/auth";


const brainloxCoins = ({name, brainlox_coin}) => {
  return (
    <React.Fragment>
      <div className="ptb-100">
        <div className="container">
          <div className="totalCoin-Container">
            <div className="totalCoin-left">
              <h1>${!brainlox_coin ? '0' : brainlox_coin}</h1>
              <span>Scroll to see how you can use.</span>
            </div>

            {/* <a className="default-btn">
              + Add Money to Wallet
              <span></span>
            </a> */}
          </div>

          <div className="features-area pt-100 pb-70">
            <div className="container">
              <div className="section-title">
                <span className="sub-title">Learn and Earn</span>
                <h2>Brainlox Cash</h2>
                <p>
                  Introducing Brainlox Cash! The more you learn, the more you earn!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <i className="flaticon-brain-process" />
                    </div>
                    <h3>For all customers</h3>
                    <p>
                      Signup and get $250 Branilox cash instantly in your wallet.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <i className="flaticon-computer" />
                    </div>
                    <h3>Buy and Earn</h3>
                    <p>
                      For every course you purchase @ Brainlox, you will receive same amount of Brainlox Cash in your wallet.
                    </p>
                    <Link href="/courses">
                      <a target="_blank" className="link-btn">View all Courses</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <i className="flaticon-shield-1" />
                    </div>
                    <h3>Discount on new courses</h3>
                    <p>
                      Use upto $25 Brainlox Cash to buy new courses.
                    </p>
                    <a
                      className="link-btn"
                      href="https://www.picktime.com/brainlox"
                      target="_blank"
                    >
                      Book a Free Demo
                    </a>

                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <i className="flaticon-world" />
                    </div>
                    <h3>Gift</h3>
                    <p>
                      Send your frineds Brainlox cash to buy course and learn.
                    </p>
                    <Link href="/gift-a-course">
                      <a target="_blank" className="link-btn">Gift a Course</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <i className="flaticon-world" />
                    </div>
                    <h3>Share</h3>
                    <p>
                      Share this message with your friend, let them also take get $250 Brainlox cash.
                    </p>
                    <Link href="/share-a-message">
                      <a target="_blank" className="link-btn">Share a Message</a>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

brainloxCoins.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/");
  }

  const payload = {
    headers: { Authorization: token },
  };

  const url = `${baseUrl}/api/v1/auth/account`;
  const response = await axios.get(url, payload);
  // console.log(response.data)
  return response.data;
};

export default brainloxCoins;
