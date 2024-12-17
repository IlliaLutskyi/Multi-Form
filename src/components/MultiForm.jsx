import React, { useState } from "react";
import SideBar from "./SideBar";
const MultiForm = () => {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  return (
    <>
      {steps.step1 && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="form_workspace_container">
            <h1>Personal info</h1>
            <h6
              className="step_text informative_text"
              style={{ display: "block" }}
            >
              please provide your name,email,address,and phone number
            </h6>
            <div className="input_container">
              <div className="input_boxes">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g.Stephen King"
                  className="input_fields"
                />
              </div>
              <div className="input_boxes">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g.stephenking@lorem.com"
                  className="input_fields"
                />
              </div>
              <div className="input_boxes">
                <label htmlFor="phone_num">Phone Number</label>
                <input
                  type="text"
                  name="phone_num"
                  id="phone_num"
                  placeholder="e.g.+096-429-212"
                  className="input_fields"
                />
              </div>
              <div className="next_btn_div">
                <button className="next_step_btn">Next step</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiForm;
