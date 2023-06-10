import { useState } from "react";
import Orientations from "./Orientations";
import Progress from "./Progress";
import { useLocation } from "react-router-dom";
const PostLogin = () => {
  const { state } = useLocation();
  console.log("hello: ", JSON.parse(sessionStorage.getItem("user")));
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>Hello</div>
      <div className="buttons mt-5">
        <button onClick={() => setToggle(true)}>Orientation</button>
        <button onClick={() => setToggle(false)}>Progress</button>
      </div>
      <div className="Content">
        {toggle && <Orientations />}
        {!toggle && <Progress />}
      </div>
    </div>
  );
};

export default PostLogin;
