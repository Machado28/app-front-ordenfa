import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 4000px;
  margin-top: 90px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  div#div-contaner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      padding-top: 44px;
      margin-bottom: 20px;
    }
    p {
      color: green;
      width: 50%;
      font-size: 20px;
      text-align: center;
    }
  }
  

  div.div-2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: #ddd;
    height: 650px;
    width: 100%;
    

    section {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;

      background-color: #fff;
      height: 300px;
      margin: 12px;
      width: 30%;
      border-radius: 4px;
    }
  }

  div.div-3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: green;
    height: 300px;
    width: 100%;
    flex-wrap: wrap;
    section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      margin: 14px;
      background-color: transparent;
      height: auto;
      width: 30%;
      color:#fff;
      border: 2px solid green;
      border-radius: 4px;
    }
  }


  div form.form-news-latter{

    background: #fff;
    height:200px;
    width:60%;
  }
  div#new-latter{
    flex-direction:row !important;
  }
`;
export default Container;

const FormContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
`;
export { FormContainer };
