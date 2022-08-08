import React from "react";
import AllData from "../Data";
import Menu from "./Menu";
import "./style/Card.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Card = ({handelClick}) => {


  return (
    <div className="container">
      <div className="row d-flex">
        {AllData.map((item) => (
          <Menu key={item.id} item={item} handelClick={handelClick} />
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Card;
