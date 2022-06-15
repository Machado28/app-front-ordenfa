import styled from "styled-components";

export const FundoTestimonial = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-image: url("https://preview.colorlib.com/theme/brber/assets/img/gallery/section_bg02.png");
  padding-top: 140px;
  padding-bottom: 100px;
  margin-bottom: 20px;
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #be8c4d;
  text-align: center;
  margin-top: -40px;

  :after {
    content: "";
    /* background-image: url(//cdn.shopify.com/s/files/1/1811/9571/files/heading-icon.png?v=1574052555); */
    display: block;
    margin: auto;
    background-repeat: no-repeat;
    width: 105px;
    height: 17px;
    margin-top: 10px;
  }
`;

export const TestimonialEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: justify;
    margin: 57px;
    line-height: 30px;

    span {
      color: #be8c4d;
      font-size: 13px;
      font-weight: 400;
    }

    h2 {
      color: #fff;
      font-size: 35px;
      font-weight: bolder;
      padding: 15px;
    }
  }
`;

export const TestimonialDireito = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: justify;
    margin: 57px;
    line-height: 30px;

    span {
      color: #be8c4d;
      font-size: 13px;
      font-weight: 400;
    }

    h2 {
      color: #fff;
      font-size: 35px;
      font-weight: bolder;
      padding: 15px;
    }
  }
`;
