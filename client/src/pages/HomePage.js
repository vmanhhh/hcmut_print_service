import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Link to="/print">
        <div className="group-btn">
          <button className="rest-option btn btn-primary" onClick={() => {}}>
            <span className="text">Bắt đầu in</span>{" "}
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </Link>
    </>
  );
};

export default HomePage;
