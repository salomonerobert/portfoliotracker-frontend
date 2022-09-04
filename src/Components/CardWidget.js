import React from "react";

const CardWidget = ({ type, value }) => {
  let data;
  switch (type) {
    case "netReturn":
      data = {
        subtitle: "Net Return",
        metric: value + '%',
        isPositive: value > 0 ? true : false
      };
      break;
    case "annReturn":
      data = {
        subtitle: "Ann. Return",
        metric: "5%",
        isPositive: true
      };
      break;
    case "unrealisedPnL":
      data = {
        subtitle: "Unrealised PNL",
        metric: "$2,353",
        isPositive: true
      };
      break;
    case "volatility":
      data = {
        subtitle: "Volatility",
        metric: "14%",
        isPositive: value > 0 ? true : false
      };
      break;
    default:
      break;
  }

  let fColor = "white"
  data.isPositive ? fColor = "green" : fColor = "red"

  return (
    <div className="card mx-1" style={{ width: "auto", border: "none" }}>
      <div
        className="card-body"
        style={{
          textAlign: "center",
          width: "auto",
          backgroundImage: "linear-gradient(to bottom right, #2858FE, #7B1DFF)",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h5 className="card-title" style={{ "fontSize": "40px" , "color": data.isPositive ? "#53E827" : "red"}}>
          {data.metric}
        </h5>
        <h6 className="card-subtitle text-white">{data.subtitle}</h6>
      </div>
    </div>
  );
};

export default CardWidget;
