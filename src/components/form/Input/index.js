import { Link } from "react-router-dom";
import _Input from "./styled";

const Input = ({ path, type, required, placeholder }) => {
  return <_Input type={type} required placeholder={placeholder} />;
};
export default Input;
