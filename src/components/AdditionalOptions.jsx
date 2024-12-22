import React from "react";

const AdditionalOptions = ({
  checks,
  duration,
  setChecks,
  name,
  title,
  discription,
  price,
}) => {
  function handleCheckBox(e) {
    if (e.target.name === "check1") {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check1: {
            state: !prevChecks.check1.state,
            price: prevChecks.check1.state ? 0 : price,
          },
        };
      });
    } else if (e.target.name === "check2") {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check2: {
            state: !prevChecks.check2.state,
            price: prevChecks.check2.state ? 0 : price,
          },
        };
      });
    } else {
      setChecks((prevChecks) => {
        return {
          ...prevChecks,
          check3: {
            state: !prevChecks.check3.state,
            price: prevChecks.check3.state ? 0 : price,
          },
        };
      });
    }
  }
  return (
    <div
      className={
        checks.state
          ? "check_box_container active_option"
          : "check_box_container"
      }
    >
      <input
        type="checkbox"
        name={`${name}`}
        id=""
        checked={checks.state}
        onChange={handleCheckBox}
      />
      <div className="check_box_option_info_container">
        <h2 className="primary_color">{title}</h2>
        <h6 className="secondary_color">{discription}</h6>
      </div>
      <h6 className="primary_color">
        {" "}
        {duration.monthly ? "$1/mo" : "$10/yr"}
      </h6>
    </div>
  );
};

export default AdditionalOptions;
