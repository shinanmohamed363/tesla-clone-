import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';


function Header() {
  const[burgerStatus,setBurgerStatus]=useState(false)

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
         <a href="#">Model Y</a>
      </Menu>
      <RightMenue>
        <a href='#'>shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenue>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
          <Coustomeclose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
         
  <li><a href='#'>Existing Inventory</a></li>
  <li><a href='#'>Used Inventory</a></li>
  <li><a href='#'>Trade-In</a></li>
  <li><a href='#'>CyberTruck</a></li>
  <li><a href='#'>Roadstar</a></li>
  <li><a href='#'>Existing Inventory</a></li>
  <li><a href='#'>Existing Inventory</a></li>
</BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:1;
  
`;

const Menu = styled.div`
display:flex;
align_item:center;
flex:1;
justify-content:center;
    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
    }

    @media(max-width:780px){
      display:none;
    }


`
const RightMenue=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
}`

const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transition:transform 0.2s;
  transform:${props=>props.show?'translateX(0%)':'translateX(100%)'};
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0, .2);

    a{
      font-weight:600;

    }
  }

`;
const Coustomeclose  = styled(CloseIcon)`
cursor:pointer; 
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
