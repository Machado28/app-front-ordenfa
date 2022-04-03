import InputBox_ from "./styled.js";
 
import { memo } from "react";

const InputBox = (props) => {
  return <InputBox_ id={props.id}>{props.children}</InputBox_>;
};
export default memo(InputBox);
