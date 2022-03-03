import { Link } from "react-router-dom";
import _Input,{InputBox,Description} from "./styled";

const Input = ({ description, path, type, placeholder }) => {
  return (
    <InputBox  > 
    <Description id>{description}</Description>
      <_Input type={type} placeholder={placeholder} />
    </InputBox>
  );
};
export default Input;
