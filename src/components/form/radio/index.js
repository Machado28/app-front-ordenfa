 import Radio_,{Label_} from "./styled.js";
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
    <Label_>
       <h6 id="form-title" className="h6">{title}:</h6>
    <Label_  flexDirection='row'
           displayFlex="flex" id="label-1" for={title}>
    
      {option.map((item, index) => (
        <Label_ key={index+'c'} id="label-2"for={item.title}>
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

        </Label_>
      ))}
    </Label_>
    </Label_>
  );
};
export default Radio;
