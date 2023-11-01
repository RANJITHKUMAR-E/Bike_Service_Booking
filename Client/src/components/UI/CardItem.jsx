import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/car-item.css";
import axios from "axios";
import BookingModel from "./bookingModel";

async function bookService(serviceId) {
  const userId = JSON.parse(localStorage.getItem("userData")).userId;
  const result = await axios.post("http://localhost:5000/api/booking", {
    serviceId,
    userId,
  });
  if (result.status === 200) toast.success("Service booked");
  else toast.warning("Something went wrong!");
  BookingModel();
}

const CardItem = (props) => {
  const {
    serviceId,
    serviceName,
    serviceCharge,
    serviceDescription,
    serviceDuration,
  } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <ToastContainer theme="colored" />
      <div className="car__item">
        <div className="car__img">
          <img
            src="https://previews.123rf.com/images/vsvr/vsvr1803/vsvr180300010/97117719-vector-bike-garage-motor-service-logo-motorcycle-engine-renovation-company-sticker-custom.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="car__item-content mt-4 d-flex flex-column justify-content-center">
          <h4 className="section__title text-center">{serviceName}</h4>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex gap-1 text-align-justify">
              {serviceDescription}
            </span>
          </div>
          <div className=" d-flex align-items-center justify-content-sm-evenly gap-1">
            <h6 className="rent__price text-center mt-">
              Charge: Rs {serviceCharge}
            </h6>
            <i className="ri-settings-2-line text-justify"></i>
            <h6>Duration: {serviceDuration}</h6>
          </div>

          <button
            className=" w-50 car__item-btn car__btn-rent w-100"
            onClick={() => bookService(serviceId)}
          >
            <Link to={""}>Book the sevice</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CardItem;
