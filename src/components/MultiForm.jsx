import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Acarde from "./Acarde";
import Advanced from "./Advanced";
import ProBadge from "./ProBadge";
const MultiForm = () => {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });
  const [planOptions, setPlanOption] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  const [duration, setDuration] = useState({ monthly: true, yearly: false });
  // useEffect(() => {
  //   console.log(duration);
  // }, [duration]);
  // useEffect(() => {
  //   console.log(steps.step1);
  // }, [steps]);
  return (
    <>
      {steps.step1 && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="workspace_container step1_container">
            <header>
              <h1>Personal info</h1>
              <h6
                className="step_text informative_text"
                style={{ display: "block" }}
              >
                please provide your name,email,address,and phone number
              </h6>
            </header>
            <main className="input_container">
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
            </main>
            <footer className="next_btn_div">
              <button
                className="next_step_btn"
                onClick={() =>
                  setSteps({ ...steps, step2: true, step1: false })
                }
              >
                Next step
              </button>
            </footer>
          </div>
        </div>
      )}
      {/* ===============================================
       STEP 2
      ============================================== */}
      {steps.step2 && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="workspace_container step2_container">
            <header>
              <h1>Select your plan</h1>
              <h6
                className="step_text informative_text"
                style={{ display: "block" }}
              >
                You have the option of mothly or yearly billing
              </h6>
            </header>
            <main className="options_container">
              <div
                className={
                  planOptions.arcade ? "options active_option" : "options"
                }
                onClick={() =>
                  setPlanOption({
                    arcade: true,
                    pro: false,
                    advanced: false,
                  })
                }
              >
                <Acarde></Acarde>
                <div>
                  <h2 className="primary_color">Arcade</h2>
                  <h6 className="secondary_color">$9/mo</h6>
                </div>
              </div>
              <div
                className={
                  planOptions.advanced ? "options active_option" : "options"
                }
                onClick={() =>
                  setPlanOption({
                    arcade: false,
                    pro: false,
                    advanced: true,
                  })
                }
              >
                <Advanced></Advanced>
                <div>
                  <h2 className="primary_color">Advanced</h2>
                  <h6 className="secondary_color">$12/mo</h6>
                </div>
              </div>
              <div
                className={
                  planOptions.pro ? "options active_option" : "options"
                }
                onClick={() =>
                  setPlanOption({
                    arcade: false,
                    pro: true,
                    advanced: false,
                  })
                }
              >
                <ProBadge></ProBadge>
                <div>
                  <h2 className="primary_color">Pro</h2>
                  <h6 className="secondary_color">$15/mo</h6>
                </div>
              </div>
            </main>
            <main className="duration_container">
              <h3
                className={
                  duration.monthly ? "active_check_box_text" : "check_box_text"
                }
              >
                monthly
              </h3>
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input
                    type="checkbox"
                    id="check-5"
                    onClick={() =>
                      setDuration({
                        monthly: !duration.monthly,
                        yearly: !duration.yearly,
                      })
                    }
                  />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
              <h3
                className={
                  duration.yearly ? "active_check_box_text" : "check_box_text"
                }
              >
                yearly
              </h3>
            </main>
            <footer className="nav_btns_container">
              <button
                className="go_back_btn"
                onClick={() =>
                  setSteps({ ...steps, step1: true, step2: false })
                }
              >
                Go back
              </button>
              <button
                className="next_step_btn"
                onClick={() =>
                  setSteps((preSteps) => {
                    return {
                      ...preSteps,
                      step3: true,
                      step2: false,
                    };
                  })
                }
              >
                Next step
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* =========================================
         STEP3
    ===============================================*/}
      {steps.step3 && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="workspace_container step3_container">
            <header>
              <h1>Pick add-ons</h1>
              <h6
                className="step_text informative_text"
                style={{ display: "block" }}
              >
                Add-ons enhance your gaming experience{" "}
              </h6>
            </header>
            <main className="check_boxes_container">
              <div className="check_box_container">
                <input type="checkbox" name="" id="" />
                <div className="check_box_option_info_container">
                  <h2 className="primary_color">Online servises</h2>
                  <h6 className="secondary_color">
                    Access to miltipalyer games
                  </h6>
                </div>
                <h6 className="primary_color"> +$10/yr</h6>
              </div>
              <div className="check_box_container">
                <input type="checkbox" name="" id="" />
                <div className="check_box_option_info_container">
                  <h2 className="primary_color">Larger storage</h2>
                  <h6 className="secondary_color">Extra 1TB of cloud save</h6>
                </div>
                <h6 className="primary_color">+$20/yr</h6>
              </div>
              <div className="check_box_container">
                <input type="checkbox" name="" id="" />
                <div className="check_box_option_info_container">
                  <h2 className="primary_color">Customizable profile</h2>
                  <h6 className="secondary_color">
                    Custom theme on your profile
                  </h6>
                </div>
                <h6 className="primary_color">+$2/mo</h6>
              </div>
            </main>
            <footer className="nav_btns_container">
              <button
                className="go_back_btn"
                onClick={() =>
                  setSteps({ ...steps, step2: true, step3: false })
                }
              >
                Go back
              </button>
              <button className="next_step_btn">Next Step</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiForm;
