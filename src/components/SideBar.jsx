import React from "react";

const SideBar = ({ steps }) => {
  return (
    <aside className="side_bar">
      <ul>
        <li>
          <div>
            <span
              className={
                steps.step1 ? "step_number active_step" : "step_number"
              }
            >
              1
            </span>
            <h6 className="step_text">STEP 1</h6>
            <h1 className="step_info">YOUR INFO</h1>
          </div>
        </li>
        <li>
          <div>
            <span
              className={
                steps.step2 ? "step_number active_step" : "step_number"
              }
            >
              2
            </span>
            <h6 className="step_text">STEP 2</h6>
            <h1 className="step_info">SELECT PLAN</h1>
          </div>
        </li>
        <li>
          <div>
            <span
              className={
                steps.step3 ? "step_number active_step" : "step_number"
              }
            >
              3
            </span>
            <h6 className="step_text">STEP 3</h6>
            <h1 className="step_info">ADD-ONS</h1>
          </div>
        </li>
        <li>
          <div>
            <span
              className={
                steps.step4 ? "step_number active_step" : "step_number"
              }
            >
              4
            </span>
            <h6 className="step_text">STEP 4</h6>
            <h1 className="step_info">SUMMARY</h1>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
