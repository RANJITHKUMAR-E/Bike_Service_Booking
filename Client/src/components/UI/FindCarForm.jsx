import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Phone number" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Booking date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder=" time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Services</option>
            <option value="non-ac">general service checkup</option>
            <option value="non-ac">oil change</option>
            <option value="non-ac">Water wash</option>
            <option value="non-ac">Brake services</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Book now</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
