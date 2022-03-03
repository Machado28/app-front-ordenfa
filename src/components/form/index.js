import _Form, { GroupInput } from "./styled.js";
import Input from "./Input/index";
import dataInputs from "../../pages/inscricao/data.js";

const Form = ({ Inputs = dataInputs }) => {
  return (
    <_Form>
      <GroupInput>
        {Inputs.map((input, index) => {
          return (
            <>
              <Input
                description={input.name}
                key={index}
                placeholder={input.placeHolder}
                type={input.type}
              />
            </>
          );
        })}
      </GroupInput>
      <GroupInput>
        {Inputs.map(( input, index) => {
          return (
            <>
              <Input
                description={input.name}
                key={index}
                placeholder={input.placeHolder}
                type={input.type}
              />
            </>
          );
        })}
      </GroupInput>
    </_Form>
  );
};
export default Form;
