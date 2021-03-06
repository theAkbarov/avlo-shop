import styled from "styled-components";

export const OtherCardInner = styled.div`
  background: #fff;
  border-radius: 40px;
  width: 30%;
  padding: 40px;
  box-sizing: border-box;
  margin: 10px 0;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    max-width: 249px;
    margin: 30px auto 0 auto;
    &.title_left {
      text-align: left;
      margin: 20px 0 0 0;
      max-width: 360px;
    }
  }

  .otherCardDescription {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin-top: 20px;
    color: #000000;
  }
`;
export const OtherCardIcon = styled.div`
  padding: 15px;
  background: #ffece6;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .img {
    object-fit: cover;
    width: 60px;
  }
`;
