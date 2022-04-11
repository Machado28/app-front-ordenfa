import Label from "../Input/styled.js";
import Option from "./Option/index.js";
import Select_ from "./styled.js";

const Select = ({
  path,
  type = "text",
  title,
  value,
  required = true,
  name,
  onClick,
  onChange,
  option=[
    {
      title:"BI"
    },
     {
      title:"Passaporte"
    }
  ]
}) => {
  console.log("dados=>",);
  return (
    <Label for={title}>{title}:
      <Select_ id={title} onClick={()=>onClick} value={title} name={name} onChange={(e)=>alert('evento=>',e.target.value)}>
        {option.map((item, index) => (
          <option value={value} key={index}>{item.title}</option>
        ))}
      </Select_>
    </Label>
  );
};
export default Select;
