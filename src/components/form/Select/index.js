import Option from "./Option/index.js";
import Select_ from "./styled.js";

const Select = ({ data }) => {
    console.log('dados=>',data)
  return (
    <Select_>
     {data.options.map((item, index) =>  <option key={index}>{item}</option>)}
      
    </Select_>
  );
};
export default Select;
