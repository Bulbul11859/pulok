import React from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
import './home.css'

const Home = () => {
  
  return (
  
    <Container>
       <Row>
    <Col>
    <div className='text-part'>
     <h1>
    
      Industrial Engineering
     
     </h1>
     <div class="blobs_1"></div>
  <div class="blobs_2"></div>
  <div class="blobs_3"></div>
  <div class="blobs_4"></div>
  <div class="blobs_5"></div>
  <div class="blobs_6"></div>
  <div class="blobs_7"></div>

     <p></p>
     <h4>Work as a  Industrial Engineering at Knit Concern Group. Enterprise software solutions including Enterprise Resource Planning, Data management, Business interactions and more</h4>
     </div>
   </Col>
     
    <Col>
    <Card className='bannerimg' style={{backgroundImage:`url("images/pulok.jpg")`}}>
   </Card>
   </Col>
  </Row>
     
    </Container>
   
  )
}

export default Home