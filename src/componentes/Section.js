import React, { useEffect, useRef } from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Section({title,description,leftbtnText,rightBtnText,backgroundImg}) {
  const ref = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `2s ${fadeIn} ease-out forwards`;
        } else {
          entry.target.style.animation = 'none';
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);return (
    
    <Wrap bgimage={backgroundImg}>
      
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>

        </ItemText>
      
        <Button>
        <ButtonGroup>
            <LeftButton>
              {leftbtnText}
            </LeftButton>
            { rightBtnText &&
              <RightButton>
                {rightBtnText}  
              </RightButton>
            }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Button>
   </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  z-index:10;
  width:100vw;
  height:100vh;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;  
overflow :hidden;
  display:flex;
  flex-direction:column;
  background-image:${props =>   `url("/images/${props.bgimage}")`};
  justify-content:space-between;
  align-items:center;
 
  width :auto;
 
  

  @media (max-width: 768px) {
    height: 100%;
  }
`


const ItemText = styled.div`
  padding-top:15vh;
  text-align:center;
  transition: opacity 1s ease-in-out;
  animation: 3s ${fadeIn} ease-out;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding-top: 5vh;
  }
`

const ButtonGroup = styled.div`
  display:flex;
  text-align:center;
  margin-bottom:30px;
  animation: 3s ${fadeIn} ease-out;

  @media (max-width: 850px) {
    flex-direction: column;
    margin-bottom:1%;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.5);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor:pointer;
  margin:8px;

  @media (max-width: 800px) {
    width: 230px;
    margin: 5px auto;
  }
`

const RightButton = styled(LeftButton)`
  background:white;
  opacity:0.5;
  color:black;
`

const DownArrow = styled.img`
 
 height:40px;
 overflow-X:hidden;
 animation: animateDown infinite 1.5s;
 

 @media (max-width: 768px) {
   height: 40px;
 }
`

const Button=styled.div`
`
