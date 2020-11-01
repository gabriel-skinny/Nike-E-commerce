import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 120px;
  height: 180px;
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  width: 1000px;
  margin-left: 72px;
  border-bottom: 1px solid #ccc;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 100px;
    background: transparent;
  }

  ul{
    width: 400px;
    font-size: 20px;
    margin-right: 140px;

    display: flex;
    justify-content: space-around;

    li{
      padding: 28px 10px;
      margin-top: 20px;

      &.active{
      border-bottom: 3px solid;
      }
    }
  }
`

export const Right = styled.ul`
  width: 280px;
  margin-right: -20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  li.cart{
    position: relative;

    &:after{
    content: "2";
    position: absolute;
    top: -8px;
    right: -2px;
    height: 10px;
    width: 10px;
    background: red;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
`