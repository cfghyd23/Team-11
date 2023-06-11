import { useState } from "react";
import Orientations from "./Orientations";
import Progress from "./Progress";
import { useLocation } from "react-router-dom";
import './PostLogic.css'
const PostLogin = () => {
  const { state } = useLocation();
  const [toggle, setToggle] = useState(true);
  return (
    <div className="mt-5 first">
      <div className="d-flex p-2 justify-content-evenly buttons-class">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setToggle(true)}
        >
          Orientation
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setToggle(false)}
        >
          Progress
        </button>
      </div>
      <div className="Content">
        {toggle && <Orientations />}
        {!toggle && <Progress />}
      </div>
    </div>
  );
};

export default PostLogin;
