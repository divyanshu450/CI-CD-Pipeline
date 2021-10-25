import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import design from "../components/design.css";

export const Individualbots = (props) => {
  const { id } = useParams();
  const sel = useSelector((state) => state.bots);
  const output = sel.filter((data) => data.id === Number(id));
  console.log(output);
  const dispatch = useDispatch();

  return (
    <div className="Individual-Bot-Container">
      <div className="Bot-Details">
        <h3> {output[0].bot}</h3>
        <br />
        <p className="Bot-Description"> {output[0].description} </p>
        <br />
        <button>MODERATE RISK</button>
        <button onClick={() => dispatch({ type: "ADD" })}>Buy</button>
      </div>
      <div className="Index-Details">
        Index Value <br />
        <b>{output[0].index_value}</b>
      </div>
      <div className="Cagr-Value">
        <p className="CAGR-TEXT">
          CAGR <br />
          <b> {output[0].cagr}% </b>
        </p>
      </div>
    </div>
  );
};
