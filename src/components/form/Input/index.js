import { Link } from "react-router-dom";
import _Input,{InputBox} from "./styled";

const Input = ({ description, path, type, placeholder }) => {
  return (
    <InputBox className='input-box'> 
    <span>{description}</span>
      <_Input type={type} placeholder={placeholder} />
    </InputBox>
  );
};
export default Input;
