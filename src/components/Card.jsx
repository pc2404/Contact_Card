import React from "react";
import Images from "./Images";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Images img={props.img} />
      </div>

      <div className="bottom">
        <Detail DetailInfo={props.phone} />
        <Detail DetailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
