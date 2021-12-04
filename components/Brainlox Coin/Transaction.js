import React from "react";

const Transaction = ({ name, withdrawal, deposit, status }) => {
  return (
    <>
      <tr className="transactionRow">
        <td className="transactionName">
          <div className="transactionName-container">
            <div className="transactionName-Img"></div>
            <div className="transactionName-Context">
              <h4>{name}</h4>
              <span>Transaction ID: 12312112</span>
              <div className="DateTime">
                <p>06 Apr,2019</p>
                <span>.</span>
                <p>03:47 pm</p>
              </div>
            </div>
          </div>
        </td>
        <td className="transactionWithdrawal">{withdrawal}</td>
        <td className="transactionDeposit">{deposit}</td>
        <td className="transactionStatus">{status ? "Success" : "Decline"}</td>
      </tr>
      {/* <hr className="hr" /> */}
    </>
  );
}

export default Transaction;