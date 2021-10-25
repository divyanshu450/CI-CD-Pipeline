import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import design from "../components/design.css";
import Botcard from "./Botcard";

//import { Individualbots } from './Individualbots'

export const Bots = () => {
  const data = useSelector((state) => state.bots);

  return (
    <div className="Bot-Container">
      <h4 className="Heading-Text">Select the best suited Algorithm </h4>
      {data.map((D, I) => {
        return <Botcard key={I} D={D} />;
      })}
    </div>
  );
};
