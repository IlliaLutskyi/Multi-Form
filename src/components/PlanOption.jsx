import React from "react";

const PlanOption = ({
  planOptions,
  duration,
  setPlanOption,
  plan,
  price,
  icon,
}) => {
  return (
    <div
      className={planOptions.state ? "options active_option" : "options"}
      onClick={() => {
        setPlanOption((prevP) => {
          return {
            arcade: {
              state: plan.toLowerCase() === "arcada" ? true : false,
              price: !prevP.arcade.state ? 0 : price,
            },
            advanced: {
              state: plan.toLowerCase() === "advanced" ? true : false,
              price: !prevP.advanced.state ? 0 : price,
            },
            pro: {
              state: plan.toLowerCase() === "pro" ? true : false,
              price: !prevP.pro.state ? 0 : price,
            },
          };
        });
      }}
    >
      {icon}
      <div>
        <h2 className="primary_color">{plan}</h2>
        <h6 className="secondary_color">
          {duration.monthly ? `$${price}/mo` : `$${price * 10}/yr`}
        </h6>
        {duration.yearly && (
          <h6 className="primary_color" style={{ fontSize: "0.7rem" }}>
            2 months free
          </h6>
        )}
      </div>
    </div>
  );
};

export default PlanOption;
