import styled from "styled-components";

const InputBox_ = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background: #fff;
  margin: 8px 0;
  flex-direction: column;

  &#check-box {
    flex-direction: row !important;
    align-items: center;
    justify-content:space-evenly ;

    width: 48%;
  span{
    width:200px;

  }
    input{
      width:80px;
      margin:12px;
      color:green;
    }
     
  }
`;
export default InputBox_;
