import styled from "styled-components";
import Title from "../Title/styled";

const Form_ = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #fff;
  //box-shadow: -6px 18px 12px #1f1f1f49;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 // border-radius: 6px;
  //border: 1px solid #ccc;
  padding:18px;
  fieldset{
    width:100%;
     margin:0 auto 12px auto;
    

  }
  .legend{
    
    font-size: 20px;
    color: #000;
    font-weight:bold;
   
  }
  #form-title{
      margin:0 auto 0 auto;
     margin-bottom:40px;
  }
  #group-title{
    font-size: 16px;
    color:green;
     font-weight:0;
     padding-top:14px;
    border-top:2px solid #044b04a4;;
  }
`;
export default Form_;

const Title_ = styled(Title)`
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  color: #0d630d;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;
export { Title_ };
