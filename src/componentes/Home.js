import React from 'react'
import styled from "styled-components"
import Section from './Section';
import Header from './Header';

function Home() {
  return (
    <Container>
      <Header/>
        <Section 
        title="Model S"
        description="Order online for touchless Delivery"
        leftbtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-s.jpg"
        backgroundVideo="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA-v2.mp4"
        />

        <Section 
        title="Model x"
        description="Order online for touchless Delivery"
        leftbtnText="Custom order"
        rightBtnText="Learn More"
        backgroundImg="model-3.jpg"
        />
        <Section 
        title="Model Y"
        description="Order online for touchless Delivery"
        leftbtnText="Custom order"
        rightBtnText="Learn More"
        backgroundImg="model-x.jpg"
        />
        <Section 
        title="Model 3"
        description="Order online for touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbtnText="Custom order"
        rightBtnText="Learn More"
        />
         <Section 
        title="Lower Cost Solor Panel In America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Custom order"
        rightBtnText="Learn More"
        />
         <Section 
        title="Solar For New Roof"
        description="solar Roof Costs Less Then A New Roof Plus Solar Panels"
        backgroundImg="model-y.jpg"
        leftbtnText="Custom order"
        rightBtnText="Learn More"
        />
         <Section 
        title="Solar For New Roof"
        description="solar Roof Costs Less Then A New Roof Plus Solar Panels"
        backgroundImg="model-y.jpg"
        leftbtnText="Shop Now"
       />
   
    </Container>
        
  )
}

export default Home

const Container = styled.div`
height:100vh;
`
