import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

import Acarde from "./Acarde";
import Advanced from "./Advanced";
import ProBadge from "./ProBadge";
import IconThankYou from "./IconThankYou";
import PlanOption from "./PlanOption";
import AdditionalOptions from "./AdditionalOptions";
const MultiForm = () => {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    confirmation: false,
  });

  const [planOptions, setPlanOption] = useState({
    arcade: {
      state: true,
      price: 0, //if picked then price +something otherwise 0
    },
    advanced: {
      state: false,
      price: 0, //if picked then price +something otherwise 0
    },
    pro: {
      state: false,
      price: 0, //if picked then price +something otherwise 0
    },
  });
  const [duration, setDuration] = useState({ monthly: true, yearly: false });
  const [checks, setChecks] = useState({
    check1: {
      state: false,
      price: 0, //if picked then price +something otherwise 0
    },
    check2: {
      state: false,
      price: 0, //if picked then price +something otherwise 0
    },
    check3: {
      state: false,
      price: 0, //if picked then price +something otherwise 0
    },
  });
  function handleCheckBox(e) {
    if (e.target.name === "check1") {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check1: {
            state: !prevChecks.check1.state,
            price: prevChecks.check1.state ? 0 : 1,
          },
        };
      });
    } else if (e.target.name === "check2") {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check2: {
            state: !prevChecks.check2.state,
            price: prevChecks.check2.state ? 0 : 2,
          },
        };
      });
    } else {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check3: {
            state: !prevChecks.check3.state,
            price: prevChecks.check3.state ? 0 : 1,
          },
        };
      });
    }
  }
  const totalPrice =
    planOptions.advanced.price +
    planOptions.arcade.price +
    planOptions.pro.price +
    checks.check1.price +
    checks.check2.price +
    checks.check3.price;
  useEffect(() => {
    if (steps.confirmation) {
      setTimeout(
        () => setSteps({ ...steps, step1: true, confirmation: false }),
        7000
      );
    }
  }, [steps]);
  // useEffect(() => {
  //   console.log(planOptions);
  // }, [planOptions]);
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
              <PlanOption
                planOptions={planOptions.arcade}
                duration={duration}
                setPlanOption={setPlanOption}
                plan={"Arcada"}
                price={9}
                icon={<Acarde></Acarde>}
              ></PlanOption>
              <PlanOption
                planOptions={planOptions.advanced}
                duration={duration}
                setPlanOption={setPlanOption}
                plan={"Advanced"}
                price={12}
                icon={<Advanced></Advanced>}
              ></PlanOption>{" "}
              <PlanOption
                planOptions={planOptions.pro}
                duration={duration}
                setPlanOption={setPlanOption}
                plan={"Pro"}
                price={15}
                icon={<ProBadge></ProBadge>}
              ></PlanOption>
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
                    checked={duration.yearly}
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
                Go Back
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
              <AdditionalOptions
                checks={checks.check1}
                duration={duration}
                setChecks={setChecks}
                name={"check1"}
                title={"Online service"}
                discription={"Access to multiple games"}
                price={1}
              ></AdditionalOptions>
              <AdditionalOptions
                checks={checks.check2}
                duration={duration}
                setChecks={setChecks}
                name={"check2"}
                title={"Larger storage"}
                discription={"Extra 1TB of cloud save"}
                price={2}
              ></AdditionalOptions>
              <AdditionalOptions
                checks={checks.check3}
                duration={duration}
                setChecks={setChecks}
                name={"check3"}
                title={"Customizable profile"}
                discription={"Custom theme on your profile"}
                price={1}
              ></AdditionalOptions>
            </main>
            <footer className="nav_btns_container">
              <button
                className="go_back_btn"
                onClick={() =>
                  setSteps({ ...steps, step2: true, step3: false })
                }
              >
                Go Back
              </button>
              <button
                className="next_step_btn"
                onClick={() =>
                  setSteps({ ...steps, step3: false, step4: true })
                }
              >
                Next Step
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* =========================================
         STEP4
    ===============================================*/}
      {steps.step4 && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="workspace_container step4">
            <header>
              <h1 className="">Finishing up</h1>
              <h6
                className="step_text informative_text"
                style={{ display: "block" }}
              >
                Double-check everything looks OK before confirming
              </h6>
            </header>
            <main className="check_boxes_container step4_main_container">
              <section className="check_info_container">
                <div className="check_info_box">
                  <div className="plan_info_box">
                    <h2 className="primary_color">
                      {planOptions.arcade.state &&
                        `Arcada(${duration.monthly ? "Monthly" : "Yearly"})`}
                      {planOptions.advanced.state &&
                        `Advanced(${duration.monthly ? "Monthly" : "Yearly"})`}
                      {planOptions.pro.state &&
                        `Pro(${duration.monthly ? "Monthly" : "Yearly"})`}
                    </h2>
                    <h6>Change</h6>
                  </div>
                  <h2 className="primary_color">
                    {planOptions.arcade.state &&
                      `$${duration.monthly ? "9/mo" : "90/yr"}`}
                    {planOptions.advanced.state &&
                      `$${duration.monthly ? "12/mo" : "120/yr"}`}
                    {planOptions.pro.state &&
                      `$${duration.monthly ? "15/mo" : "150/yr"}`}
                  </h2>
                </div>
                <hr />
                {checks.check1.state && (
                  <div className="check_info_box">
                    <h6 className="secondary_color">Online Services</h6>
                    <h4>{duration.monthly ? "+$1/mo" : "+$10/yr"}</h4>
                  </div>
                )}
                {checks.check2.state && (
                  <div className="check_info_box">
                    <h6 className="secondary_color">Larger storage</h6>
                    <h4>{duration.monthly ? "+$2/mo" : "+$20/yr"}</h4>
                  </div>
                )}
                {checks.check3.state && (
                  <div className="check_info_box">
                    <h6 className="secondary_color">Customizable profile</h6>
                    <h4>{duration.monthly ? "+$1/mo" : "+$10/yr"}</h4>
                  </div>
                )}
              </section>
              <div className="check_info_box total_box">
                <h6 className="secondary_color">
                  Total{duration.monthly ? "(per month)" : "(per year)"}
                </h6>
                <h2 className="primary_color">
                  +
                  {duration.monthly
                    ? `$${totalPrice}/mo`
                    : `$${totalPrice * 10}/yr`}
                </h2>
              </div>
            </main>
            <footer className="nav_btns_container">
              <button
                className="go_back_btn"
                onClick={() =>
                  setSteps({ ...steps, step3: true, step4: false })
                }
              >
                Go Back
              </button>
              <button
                className="next_step_btn"
                onClick={() =>
                  setSteps({ ...steps, step4: false, confirmation: true })
                }
              >
                Confirm
              </button>
            </footer>
          </div>
        </div>
      )}
      {/* =========================================
         Confirmation step
    ===============================================*/}
      {steps.confirmation && (
        <div className="form_container">
          <SideBar steps={steps}></SideBar>
          <div className="workspace_container confirmation_step">
            <IconThankYou></IconThankYou>
            <h1 className="primary_color">Thank you</h1>
            <h6 className="secondary_color">
              Thanks for confirming your subscription! We hope you have fun
              usind our platform. If you need support,please feel free to email
              us at support@loremgaming.com
            </h6>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiForm;
