import { useState } from "react";
import Orientations from "./Orientations";
import Progress from "./Progress";
const PostLogin = (props) => {
  console.log(props);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="buttons mt-5">
        <button onClick={setToggle(true)}>Orientation</button>
        <button onClick={setToggle(false)}>Progress</button>
      </div>
      <div className="Content">
        {toggle && <Orientations />}
        {!toggle && <Progress />}
      </div>
    </div>
  );
};

export default PostLogin;
