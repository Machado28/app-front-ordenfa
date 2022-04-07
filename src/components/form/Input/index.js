import { memo } from "react";
import { Link } from "react-router-dom";
import Label from "./styled";

const Input = ({
  path,
  type = "text",
  title,
  value,
  name,
  required = true,
  placeholder,
  onClick,
  onChange
}) => {
  return (
    <Label  flexDirection=''
           displayFlex="0" for={title}>
      
      {required === true ? (
       <> {"* "+ title}
        <input
        readOnly={false}
           value={value}
          onClick={onClick}
          onChange={onChange()}
          type={type}
          id={title}
          
          name={name}
          placeholder={placeholder}
           required
          
        />
       </>
      ) : (
        <>
        {title}
        <input
          value={value}
          onClick={onClick}
          onChange={onChange()}
          type={type}
          id={title}
          name={title}
          onFocus={this.value}
          placeholder={placeholder}
         
        />
        </>
      )}
    </Label>
  );
};
export default memo(Input);
