import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
export default function Body({ myCard }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "60px",
        }}
      >
        {myCard.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: "50vh",
                background: "linear-gradient(#cfd9df,#e2ebf0)",
                width: "350px",
                padding: "24px",
              }}
            >
              <div>
                <img src={item.image} alt="" style={{ width: "300px" }} />
                <p>{item.title}</p>
                <p>{item.content}</p>
                <button
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "7px",
                    outline: "none",
                    background: "linear-gradient(  #F0F600,#00A8AA )",
                  }}
                >
                  {item.button}{" "}
                </button>
              
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
}
