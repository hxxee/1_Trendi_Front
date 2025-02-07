import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 393px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;

  #name {
    display: flex;
    width: 116px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Type = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;

  #puttype {
    width: 195px;
    margin-left: 18px;
    height: 24px;
    flex-shrink: 0;
    color: #202020;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    border: none;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Time = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
`;

export const Level = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
`;

export const Taste = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
`;

export const Spicy = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
`;

export const Go = styled.div`
  display: flex;
  margin-top: 59px;
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb31f;
  text-align: center;
  justify-content: center;
  align-items: center;

  #go {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 49px;
`;
