import _SinzeDiv from "./styled.js";

import React from "react";

const SinzeDiv = (props) => {
  return <_SinzeDiv bColor={props.bColor}>{props.children}</_SinzeDiv>;
};
export default SinzeDiv;
