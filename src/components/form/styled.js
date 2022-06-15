import styled from "styled-components";
import Title from "../Title/styled";

const Form_ = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  background-color: #fff;
  //box-shadow: -6px 18px 12px #1f1f1f49;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-top-left-radius: 30px;
  transform:translateY(-30vh);
  border-top-right-radius: 30px;
  // border-radius: 6px;
  //border: 1px solid #ccc;
  padding: 18px;
  fieldset {
     display: flex;
     flex-wrap: wrap;
    width: 100%;
    margin: 10px auto 12px auto;
  }
  .legend {
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
  #form-title {
    margin: 0 auto 0 auto;
    margin-bottom: 40px;
  }
  #group-title {
    font-size: 16px;
    color: green;
    font-weight: 0;
    padding-top: 24px;
    border-top: 1px solid #ddddddc4;
    
  }
`;
export default Form_;

 

export const ButtonArea = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: #f3f1f1; */
  display: flex;
  align-items: center;
  border-top:1px solid #ddd;
  justify-content: center;
  padding-bottom: 14px;
  margin-top:4%;
 border-radius: 10%;
  button{
    width: 50%;
  }
`;
