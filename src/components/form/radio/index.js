import Label from "../Input/styled.js";

import Radio_ from "./styled.js";
import Title from './../../Title/index';

const Radio = ({
  title,
  value,
  required = true,
  onClick,
  onChange,
  option = [
    {
      title: "Masculino",
    },
    {
      title: "femenino",
    },
  ],
}) => {
  console.log("dados=>");
  return (
    <Label  flexDirection='row'
           displayFlex="flex" id="label" for={title}>
     <h6 id="form-title" className="h6">{title}:</h6>
      {option.map((item, index) => (
        <Label for={item.title}>
          {item.title}
        <Radio_
        key={index}
          id={item.title}
          onClick={onClick}
          value={item.title}
          name={title}
          type='radio'
          onChange={()=>onChange}
        ></Radio_>

        </Label>
      ))}
    </Label>
  );
};
export default Radio;
