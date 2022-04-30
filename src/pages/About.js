import React from 'react'
import { Container,Navbar,Card,Row,Col,Badge } from 'react-bootstrap'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <Badge pill bg="light" text="dark" style={{marginLeft:"100px"}}>
          <h1 >
         About me
         </h1>
        
        </Badge>

    <Container>
    
       <Row>
       <Col>
         
         <p className='about-text'>Hello. I am a freelancer & a coffee lover. I live in London, United Kingdom. I am passionated about minimalistic and flat design. I have over 10 years experience in leading teams and shipping complex digital products.<br></br><br></br>

        Vestibulum at pulvinar nisi, non commodo erat. Aliquam lobortis posuere magna sed tincidunt. Sed neque dignissim rutrum. Nullam efficitur ornare tellus eget condimentum.</p>
    </Col>
    <Col>
    <Card
         bg='light'
         text='dark'
    
      style={{ width: "80%" }}
      className="mb-2 about-card"
    >
     
      <Card.Body >
       
        <Card.Text className='about-bb'>
         <ul>
           <li>Birthday :<span>18 Apri 1997</span></li>
           <li>Age : <span className='sp-1'>26</span></li>
           <li>Address :<span className='sp-2'>25no word,Bondor,Naryanganj</span></li>
           <li>Email:<span className='sp-4'>pulok123@gail.com</span></li>
           <li>Phone:<span className='sp-3'>01680012229</span></li>
           <li>Study :<span className='sp-5'>BUFT Logo BGMEA University of Fashion & Technology</span></li>
         </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    
</Col>

  </Row>
   
       
  
    </Container>
    </div>
  )
}

export default About