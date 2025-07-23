
import React from "react";
import payment from "../../assets/payment.jpg";
import "./Success.scss";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div className="success__page">
      <div className="success__container">
        <div className="success__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-check"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#D6F9DD"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <div className="success__msg">Order Placed Successfully!</div>
        <button 
          className="return__cta" 
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#9401ca",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Return to Shop
        </button>
      </div>
      <div className="success__right">
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Success;
