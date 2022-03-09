import { Link } from "react-router-dom";
import _Input from "./styled";

const Input = ({ path, type, required, placeholder,onClick,preco }) => {
  return <_Input type={type} onClick={onClick} value={preco} required placeholder={placeholder} />;
};
export default Input;
