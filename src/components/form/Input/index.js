import { memo } from "react";
import { Link } from "react-router-dom";
import Label from "./styled";

const Input = ({
  path,
  type = "text",
  title,
  value,
  required = true,
  placeholder,
  onClick,
  onChange,
}) => {
  return (
    <Label for={title}>
      
      {required === true ? (
       <> {"* "+ title}
        <input
          value={value}
          onClick={onClick}
          onChange={onChange}
          type={type}
          id={title}
          name={title}
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
          onChange={onChange}
          type={type}
          id={title}
          name={title}
          placeholder={placeholder}
         
        />
        </>
      )}
    </Label>
  );
};
export default memo(Input);
