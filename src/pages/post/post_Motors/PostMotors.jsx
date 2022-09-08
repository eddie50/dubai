import "./PostMotors.scss";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const motorVariants = [
  {
    id: 1,
    name: "Cars",
  },
  {
    id: 2,
    name: "Motorcyles",
  },
  {
    id: 3,
    name: "Auto Accesories & Parts",
  },
  {
    id: 4,
    name: "Heavy Vehicles",
  },
  {
    id: 5,
    name: "Boats",
  },
  {
    id: 6,
    name: "Number Plates",
  },
];
const PostMotors = () => {
  return (
    <div className="postMotorPage">
      <h1>
        Dub<span>i</span>zlle
      </h1>
      <div className="container">
        <h3>Now choose the right category for your ad:</h3>
        <p>*Only cars active*</p>
        <ul>
          <li className="top-link">
            <Link to="/post_ad">...</Link>
            <ArrowForwardIosIcon className="top-link-icon" />
            <p>Motors</p>
          </li>
          {motorVariants.map((variant) => (
            <Link to={`/post_Motors/${variant.name}`} key={variant.id}>
              <li>
                <p>{variant.name}</p>
                <ArrowForwardIosIcon className="arrowIcon" />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostMotors;
