import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import design from "../components/design.css";

const Botcard = ({ D }) => {
  const dispatch = useDispatch();
  return (
    <div className="rendering-bots">
      <div className="Bot-Name">{D.bot}</div>
      <div className="Index-value">
        Index: <br /> <b> {D.index_value} </b>
      </div>
      <div className="CAGR">
        <p className="CAGR-TEXT">
          CAGR : <br /> <b> {D.cagr}% </b>
        </p>
      </div>
      <div className="Button-Area">
        <Link to={`/Bots-details/${D.id}`} exact>
          <button>View Algo</button>
        </Link>{" "}
        <br />
        <button onClick={() => dispatch({ type: "ADD" })}>Buy</button>
      </div>
    </div>
  );
};

export default Botcard;
