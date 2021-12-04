import React, { useState } from "react";
import PageBanner from "../components/Common/PageBanner";
import Share from '../components/Common/share';
import data from "../utils/share-message.json";

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  Button,
  CardFooter,
} from "reactstrap";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!")
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };


  const HASHTAGS = ["brainlox"];
  const URL = "http://brainlox.com";

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <PageBanner
        pageTitle="Share A Message"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Share A Message"
      />

      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <div className="col-lg-6 col-md-12 mt-4" key={item.id}>
                  <Card inverse>
                    <CardBody>
                      <CardText>{item.message}</CardText>
                      <CardFooter className="text-muted">
                        <Button color="danger">
                          {" "}
                          <CardLink
                            onClick={() => copyToClipBoard(item.message)}
                            className="text-light"
                          >
                            Copy to Clipboard
                          </CardLink>
                        </Button>
                        <Share url={URL} hashtags={HASHTAGS} message={item.message} />
                      </CardFooter>
                    </CardBody>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
