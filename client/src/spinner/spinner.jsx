import HashLoader from "react-spinners/HashLoader";
import {useState} from "react";

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ae6538");

  return (
    <div className="sweet-loading">
      <HashLoader color={color} loading={loading}  size={150} />
    </div>
  );
}

export default Spinner;