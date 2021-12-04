import React, { useState } from "react";
import validator from "validator";

function SuccessfullOrder() {
  const [feedback, setFeedback] = useState(null)
  const [isFeedbackFormSubmit, setIsFeedbackFormSubmit] = useState(false);
  const [invitedFriend, setInvitedFriend] = useState("");
  const [inviteEmailVaild, setInviteEmailVaild] = useState(false);

  // fedback form submit handeler
  const feedbackChangeHandeler = (event) => {
    const feedbackResponse = event.target.value;
    setFeedback(feedbackResponse)
    // setIsFeedbackFormSubmit.value(feedbackResponse)
  };

  const onSubmitFeedbackHandeler = (event) => {
    event.preventDefault();
    setIsFeedbackFormSubmit(true);
    console.log(feedback);
  };

  // Invite friend form handeler

  const InviteChangeHandeler = (event) => {
    // email validation
    const email = invitedFriend;

    if (validator.isEmail(invitedFriend)) {
      setInviteEmailVaild(true);
    } else {
      setInviteEmailVaild(false);
    }

    setInvitedFriend(event.target.value);
  };

  const inviteSubmitHandeler = (event) => {
    event.preventDefault();
    console.log(invitedFriend);
    setInvitedFriend("");
  };

  return (
    <React.Fragment>
      <div className="SuccessfullOrder ptb-100">
        <div className="SO-container">
          <div className="Order-Context">
            <div className="success-container">
              <div className="checkMark-context">
                <img
                  id="checkMark"
                  src="/images/check-solid.svg"
                  alt="Logo Here"
                />
              </div>
              <h2>Order Successfully Placed</h2>
            </div>
            <hr />
            <div className="orderFeedback-container">
              {!isFeedbackFormSubmit ? (
                <form onSubmit={onSubmitFeedbackHandeler} >
                  <div className="FeedbackQuestion">
                    <h5>How was your experience with Brainlox?</h5>
                  </div>
                  <div className="FeedbackQuestion-options">
                    <div className="option">
                      <input
                        className="form-check-input"
                        value="Fair"
                        type="radio"
                        name="option"
                        id="option1"
                        onChange={feedbackChangeHandeler}
                      />
                      <lable className="optionLable" for="option1">
                        Fair
                      </lable>
                    </div>
                    <div className="option">
                      <input
                        value="Average"
                        className="form-check-input"
                        type="radio"
                        name="option"
                        id="option2"
                        onChange={feedbackChangeHandeler}
                      />
                      <lable className="optionLable" for="option2">
                        Average
                      </lable>
                    </div>
                    <div className="option">
                      <input
                        className="form-check-input"
                        value="Great"
                        type="radio"
                        name="option"
                        id="option2"
                        onChange={feedbackChangeHandeler}
                      />
                      <lable className="optionLable" for="option2">
                        Great
                      </lable>
                    </div>
                  </div>
                  <div className="FeedbackSubmit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              ) : (
                <h2 className="feedbackThankYou">
                  Thank You for your valuable Feedback !
                </h2>
              )}
            </div>
            <hr />
            <div className="Invite-container">
              <div className="InviteLable">
                <h2>Invite your Friends</h2>
                <h6>Get $10 credit when they make their first purchase</h6>
              </div>
              <form onSubmit={inviteSubmitHandeler}>
                <div className="InviteEmail-container">
                  <input
                    value={invitedFriend}
                    required
                    onChange={InviteChangeHandeler}
                    type="email"
                    placeholder="Email Address (One at a time)"
                  />
                </div>
                <div className="Invite-btn">
                  {inviteEmailVaild ? (
                    <button type="submit">Send Invite</button>
                  ) : (
                    <button id="InvaildEmail-btn" type="submit" disabled>
                      Send Invite
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SuccessfullOrder;
