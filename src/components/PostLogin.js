import { useState } from "react";
import Orientations from "./Orientations";
import Progress from "./Progress";
import { useLocation } from "react-router-dom";
const PostLogin = () => {
  const { state } = useLocation();
  const [toggle, setToggle] = useState(true);
  return (
    <div className="mt-5">
      <div className="d-flex p-2 justify-content-evenly ">
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
