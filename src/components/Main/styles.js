import styled, { keyframes } from 'styled-components';
import backgroudImg from "../../assets/background.jpg"



const show = keyframes`
  from {
    scale: 0;
  }

  to{
    scale: 1;
  }
`;

const came = keyframes`
  from{
    transform: translateX(-380px);
  }

  to{
    transform: translateX(0px);
  }
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 25px;

  display: flex;
`;

export const Content = styled.main`
  width: 1000px;
  height: 80vh;

  background: linear-gradient(rgba(0, 105, 233, 0.8), rgba(0, 105, 233, 0.8)), 
  url(${backgroudImg});
  background-size: cover;
  border-radius: 25px 0 0 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  div.middle{
    animation: ${came} 1s ease-in-out;

    h1{
    font-family: 'Anton', sans-serif;
    font-size: 180px;
    font-style: italic;
    opacity: 0.3;
    margin-left: 230px;
    margin-bottom: -55px;
  }

    h2{
      font-family: 'Fjalla One', sans-serif;
      font-size: 90px;
      opacity: 0.3;
      align-self: flex-start;
      margin-right: 300px;
      margin-bottom: 150px;
    }
  }

  img.shoe{
    position: absolute;
    top: 90px;
    right: 450px;
    z-index: 5;
    animation: ${show} 1s ease-in-out;
  }

  div.footer{
    position: absolute;
    bottom: 150px;
    right: 750px;
    z-index: 1;
    text-align: right;
    animation: ${show} 1s ease-in-out;
    
    h1{
    font-size: 120px;
    font-style: italic;
    opacity: 0.3;
    text-decoration: dashed;
    -webkit-text-stroke: 2px white;
    color: transparent;
    
      &:first-child{
        margin-top: 1250px;
      }

      &:nth-child(2){
        font-size: 70px;
        margin-right: 40px;
        margin-top: -40px;
      }
      
      &:nth-child(3){
        font-size: 60px;
        margin-top: -25px;
        margin-right: 30px;
      }
    }
  }
`


export const Details = styled.div`
  width: 500px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  img{
    width: 250px;
    margin-left: 170px;
    
}

`


export const Footer = styled.footer`

  div.social-media{
   position: absolute;
   right: 120px;
   top: 600px;
   transform: rotate(270deg);

   display: flex;


    h3{
      font-size: 18px;
      color: #000;
      margin-left: 30px;
      font-weight: 400;
    }
  }


  div.box{
    position: relative;
    z-index: 12;
    height: 180px;
    width: 140px;
    padding: 10px 20px;
    box-shadow: 0px -2px 10px 0px;
    color: #ccc;

    display: flex;
    align-items: center;

    div.svg{
      position: absolute;
      top: -15px;
      left: 59px;
      z-index: 99;
      height: 30px;
      width: 30px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0px 0px 5px gray;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.4s;
    
      &:hover{
        background: #ccc;
      }
    }
    
    div.item{

      h1{
        color: #40403f;
        font-size: 18px;
      }

      b{
        color: #000;
        font-size: 24px;
      }

      h4{
        color: #ccc;
        margin-top: 20px;
      }
    }
  
    
    div.squares{
      margin-top: 20px;


      div.square{
        width: 15px;
        height: 15px;
        margin-left: 30px;
        margin-bottom: 5px;
      
        &.blue{
          background: blue;
        }

        &.red{
          background: red;
        }

        &.green{
          background: #97e346;
        }
        
        &.gray{
          background: gray;
        }
        
        &.black{
          background: black;
        }

      }
    }

    div.carts{
      position: absolute;
      bottom: -20px;
      right: 0px;
      z-index: 4;
      
      h1{
        font-size: 14px;
        color: #ccc;
        margin-right: -10px;

        &.add{
          margin-top: 5px; 
          position: relative;
          left: -20px;
        }
      }

      div.size{
        display: flex;
        align-items: center;
        
        svg{
          margin-right: 5px;
        }
      }
    }
  }

`