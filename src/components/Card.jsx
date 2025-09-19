import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>The UserName is {props.user} </h1>
      <h2>The City is {props.city}</h2>
      <h3> The Age is {props.age} </h3>
    </div>
  );
};

export default Card;
