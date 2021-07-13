import React, { Component } from 'react'
import Mycarosel from './Mycarosel'
import { Container,Row,Col,Navbar,Nav,Form,FormControl,Button,Image,NavDropdown,Carousel,Card,CardGroup} from 'react-bootstrap'
import { AiFillApple,AiFillFacebook,AiOutlineGooglePlus,AiOutlineShoppingCart,AiOutlineArrowRight,AiOutlineDoubleRight,AiOutlineSmile} from "react-icons/ai"
import {MdCall,MdQueryBuilder,MdPhoneIphone,MdPeople} from "react-icons/md"
import {RiTwitterFill,RiTwitterLine,RiWhatsappFill,RiInstagramLine,RiPencilLinet} from "react-icons/ri"
import {GoLightBulb,GoMail} from "react-icons/go"
import {VscSymbolFile} from "react-icons/vsc"
import {ImFileText2} from "react-icons/im"
import {BsAward} from "react-icons/bs"
import {BiWorld} from "react-icons/bi"
import {FaQuoteRight,FaPhoneAlt} from "react-icons/fa"
import CountUp from 'react-countup';
import { SocialIcon } from 'react-social-icons';


export  class Project1 extends Component {
    render() {
        return (
            <div className="cal">
            
                      <Container>
    <Row className="col">
        <Col  xs={6}>
     
         <span className="log" >hello</span>
         <span className="log">|</span>
         <span className="log">hi</span>
         <span className="log">|</span>
         <span className="log">good</span>
         </Col>
     
     {/* </Col> */}
      <Col  xs={6}>  
     <span className="col1"><RiTwitterFill/></span>
    <span className="col1"> <RiWhatsappFill/></span>
    <span className="col1"> <AiFillFacebook/></span>
    <span className="col1"> <RiInstagramLine/></span>
    <span className="col1"> <AiOutlineGooglePlus/></span>
    <span className="col1"> <AiOutlineShoppingCart/></span>
      {/* </Col>  */}
   
      {/* </Navbar> */}
         </Col> 
   
 
   
    </Row>
</Container>
   
                        <Container>
                            <Row>
                        <Col xs={6}>
                        <Image className="img"src="education_logo.png"/>
                        </Col>
                        <Col xs={3}>   
                     <h3> <MdCall/>call us</h3>
                            <p>+91-7989867685</p>
                        </Col>
                        <Col xs={3}>
                            <h3><MdQueryBuilder/> we are open</h3>
                            <p>MON-FRI 8.00-16.00</p>
                        </Col>

                        </Row>
                        
                          </Container>

                          <Container >
                              <Row>
                                  <Col xs={12}>
                                  <Navbar expand="lg">
  <Container  className="hello" >

    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse  id="basic-navbar-nav"  >
      <Nav >
        
        <NavDropdown title="HOME" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>
        <NavDropdown title="Features" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>


       
        <NavDropdown title="Pages" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>
        <NavDropdown title="Courses" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>

        <NavDropdown title="Teachers" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>

        <NavDropdown title="Shortcodes" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>
        <NavDropdown title="Blogs" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Button variant="outline-danger">BOOKNOW</Button>
  </Container>
</Navbar>

                                  </Col>
                              </Row>
                          </Container>

<Container>
  <Row>
    <Col xs={12}>



    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="education_banner1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="bye">
      <h1>Eduction</h1>
      <h2>Education for everyone</h2>
      <p>we always provide best service for the clients</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="education_banner2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className="fo">
      <h1>Education</h1>
      <h2>Education for everyone</h2>
      <p>we always provide best service for the clients</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="education_banner3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption  className="do">
      <h1>Education</h1>
      <h2>Education for everyone</h2>
      <p>we always provide best service for the clients.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </Col>

  </Row>
</Container>

<Container>
<Row  className="prime">

  <Col  lg={6} >
  <Card   style={{ width: '25rem',height:'32rem'}}>
  {/* <Card.Img variant="top" src="office2.jpg" /> */}
  <Mycarosel/>
  <Card.Body>
    <Card.Title><h2>StudyPress Education Templates</h2></Card.Title>
    <Card.Text>
    Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.
    <br></br>
    At age 18, she married William Seton. He died nine decades after, leaving her five children to raise alone.
    <br></br>
    </Card.Text>
    <Button variant="primary">Readmore<AiOutlineArrowRight/></Button>
  </Card.Body>
</Card>
  </Col>



  
<Col  lg={6} md={4}  className= "text-lg-start text-sm-center text-center">
<h1>Our Features</h1>
<p>Analyzing and interpreting data can be a time consuming and sometimes frustrating endeavor.
  Aside from seeking out experts within your network of colleagues.</p>
     <Row>          
<Col lg={6}>
<h2><GoLightBulb/>Experince Yourself</h2>
  <p> Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.</p>
  <Button variant="primary">Readmore<AiOutlineArrowRight/></Button>
  </Col>
  <Col lg={6}>
  <h2><MdPhoneIphone/>Onine Learning</h2>
  <p> Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.</p>
  <Button variant="primary">Readmore<AiOutlineArrowRight/></Button>
  </Col>
</Row>

<Row>
<Col lg={6}>
  <h2><MdPeople/>Experince Staff</h2>
  <p> Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.</p>
  <Button variant="primary">Readmore<AiOutlineArrowRight/></Button>
  </Col>
  <Col lg={6}>
  <h2><VscSymbolFile/>Certified course</h2>
  <p> Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.</p>
  <Button variant="primary">Readmore<AiOutlineArrowRight/></Button>
  </Col>
  </Row>
</Col>

</Row>
</Container>


<Container className="decp">
  <Row className="galvatron">
    <Col lg={12}>
  <p>Edupress The Best Education &amp; University HTML Template Ever !<Button >Purchasenow<AiOutlineDoubleRight/></Button></p>
</Col>
  </Row>
</Container>


<Container className="optimus" >
<h1>Our Courses</h1>
  <Row >
    <Col lg={3}>
    
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="course_1.jpg" />
    <Card.Body>
      <Card.Title>SoftWare Engineering</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
     
      </Card.Text>
      <Button variant="primary">viewdetails</Button>
    </Card.Body>
  
  </Card>
  </CardGroup>
  
    </Col>

    <Col lg={3}>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="course_2.jpg" />
    <Card.Body>
      <Card.Title>Electronics & Electric</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
     
      </Card.Text>
      <Button variant="primary">viewdetails</Button>
    </Card.Body>
  </Card>
  </CardGroup>
    </Col>

    <Col lg={3}>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="course_3.jpg" />
    <Card.Body>
      <Card.Title>Development Studies</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
     
      </Card.Text>
      <Button variant="primary">viewdetails</Button>
    </Card.Body>
  </Card>
  </CardGroup>
    </Col>


    <Col lg={3}>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="course_4.jpg" />
    <Card.Body>
      <Card.Title>Accounting Technologies</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
     
      </Card.Text>
      <Button variant="primary">viewdetails</Button>
    </Card.Body>
  </Card>
  </CardGroup>
    </Col>


  </Row>
 
</Container>


<Container className="bee">
  <Row>
    <Col lg={6}>
    <Image src="Group.jpg" fluid />
    </Col>
<Col lg={6}>
<h1>Why Choose us ?</h1>
<p>Helios Education Foundation is dedicated to enriching the lives of individuals in Arizona and Florida by creating opportunities for success in postsecondary education. Helios supports initiatives that address the multitude of challenges students face across the education continuum</p>
<Row>
  <Col lg={4}>
    <h1><MdPhoneIphone/></h1>
    <h6>R E S P O N S I V E</h6>
  </Col>
  <Col lg={4}>
  <h1><GoLightBulb/></h1>
    <h6>V A L I D A T I O N</h6>
  </Col>
  <Col lg={4}>
    <h1><ImFileText2/></h1>
    <h6>C E R T I F I  E D</h6>
  </Col>
  
</Row>

</Col>
  </Row>
</Container>


<Container className="wonderwomen">
  <Row className="ironman">
    <Col lg={3}>
      <div>
<h1 className="batman"><AiOutlineSmile/></h1>
</div>
<h1><CountUp end={5248} /></h1>
<h4> Happy students</h4>
    </Col>

<Col lg={3}>
<div>
  <h1 className="batman"><ImFileText2/></h1>
</div>
<h1><CountUp end={675} /></h1>
<h4>Our Courses</h4>
</Col>

<Col lg={3}>
  <div>
<h1 className="batman"><MdPeople/></h1>
</div>
<h1><CountUp end={675} /></h1>
<h4>Our Teachers</h4>
</Col>


<Col lg={3}>
  <div>
<h1 className="batman"><BsAward/></h1>
</div>
<h1><CountUp end={24} /></h1>
<h4>Awards Won</h4>
</Col>


  </Row>
</Container>


<Container className="flash">
  <h1>Our Teacher</h1>
  <Row>
    <Col lg={3}>
   <Card>
  <Card.Img variant="top" src="education_teacher1.jpg" />
  <Card.Body>
    <Card.Title>Jean Piaget</Card.Title>
    <Card.Text>
    When Computer Science graduate Ray began teaching, he found the lessons prepared for students dull and uninspiring.
     He started developing new software for learning using Microsoft Kinect.
    </Card.Text>
    <Button variant="primary">veiwdetails</Button>
  </Card.Body>
</Card>
    </Col>

    <Col lg={3}>
    <Card>
  <Card.Img variant="top" src="education_teacher2.jpg" />
  <Card.Body>
    <Card.Title>Peter Tabichi</Card.Title>
    <Card.Text>
    When Computer Science graduate Ray began teaching, he found the lessons prepared for students dull and uninspiring.
     He started developing new software for learning using Microsoft Kinect.
    </Card.Text>
    <Button variant="primary">veiwdetails</Button>
  </Card.Body>
</Card>
    </Col>

    <Col lg={3}>
    <Card>
  <Card.Img variant="top" src="education_teacher3.jpg" />
  <Card.Body>
    <Card.Title>David Calle</Card.Title>
    <Card.Text>
    When Computer Science graduate Ray began teaching, he found the lessons prepared for students dull and uninspiring.
     He started developing new software for learning using Microsoft Kinect.
    </Card.Text>
    <Button variant="primary">veiwdeatils</Button>
  </Card.Body>
</Card>
    </Col>

    <Col lg={3}>
    <Card>
  <Card.Img variant="top" src="education_teacher4.jpg" />
  <Card.Body>
    <Card.Title>Raymond Chambers</Card.Title>
    <Card.Text>
    When Computer Science graduate Ray began teaching, he found the lessons prepared for students dull and uninspiring.
     He started developing new software for learning using Microsoft Kinect.
    </Card.Text>
    <Button variant="primary">veiwdetails</Button>
  </Card.Body>
</Card>
    </Col>

  </Row>
</Container>



<Container className="DDL">
  <h1>Our Gallery</h1>
  <Button variant="primary">Primary</Button>
 <Button className="Nest" variant="primary">Primary</Button>
  <Button className="Nest" variant="primary">Primary</Button>
  <Button className="Nest" variant="primary">Primary</Button>
  
  <Row className="captain">
    <Col lg={12}>
      <Row>
        <Col lg={3}>
        <Image src="photos1.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos2.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos3.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos4.jpg" fluid />
        </Col>

      </Row>
<Row className="thor">
<Col lg={3}>
        <Image src="photos5.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos6.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos7.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos8.jpg" fluid />
        </Col>

</Row>

<Row className="panther">
<Col lg={3}>
        <Image src="photos9.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos10.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos11.jpg" fluid />
        </Col>

        <Col lg={3}>
        <Image src="photos12.jpg" fluid />
        </Col>

</Row>


    </Col>

  </Row>
</Container>

<Container className="superman">
  <Row className="antman">
    <Col lg={12}>
<h1>OUR HAPPY STUDENTS SAY</h1>
<br/>
<Image src="3.jpg" roundedCircle />
<br></br>
<br></br>
<h6>Elizabeth Ann Bayley was born in 1774 in NYC, two years before the Declaration of Independence was signed.</h6>

<h1><FaQuoteRight/></h1>
<br></br>
<h4>Catherine Grace</h4>
<h6> Designer</h6>
    </Col>
  </Row>
</Container>

<Container className="aquaman">
  <h1>Latest News</h1>
  <Row>
    <Col lg={4}>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="news_pic1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="naruto" type="submit">veiwdetail</Button>
  </Card.Body>
</Card>
    </Col>

    
    <Col lg={4}>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="news_pic2.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
     <Button className="naruto" type="submit">veiwdetail</Button>
  </Card.Body>
</Card>
    </Col>


    <Col lg={4}>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="news_pic3.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="naruto" type="submit">veiwdetails</Button>
  </Card.Body>
</Card>
    </Col>

  </Row>
  
</Container>



<Container className="jarvis">
  <Row className="vision">
    <Col lg={12}>
<Row>
  <Col lg={6}>
    
    <h3><GoMail/>SUBSCRIBE TO OUR NEWLETTER</h3>
  </Col>
  <Col lg={6}>
  <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-3"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Col>
</Row>
    </Col>
  </Row>
</Container>


<Container className="stranger">
<Row className="hulk">
<Col lg={12}>
<Row>
<Col lg={3}>
<Image src="education_logo.png" fluid />
<h5>203, Envato Labs, Behind Alis Steet</h5>
<br/>
<h5>Melbourne, Australia.</h5>
<h6><FaPhoneAlt/>123-456-789</h6>
<h6><GoMail/>contact@yourdomain.com</h6>
<h6><BiWorld/>www.yourdomain.com</h6>
</Col>
<Col lg={3}>
  <h3>Useful Link</h3><br/>
  <h5 className="spiderman">About us</h5>
  <h5 className="spiderman">Our courses</h5>
  <h5 className="spiderman">Pricing Table</h5>
  <h5 className="spiderman">Gallery</h5>
  <h5 className="spiderman">Shop</h5>
</Col>

<Col lg={3}>
  <h3>Twitter Feed</h3>
  <RiTwitterFill/>
<h6>Are you keen to learn some new</h6>
<h6>creative skills in 2021? We've done a</h6>
<h6> round up of the best free</h6>
<h6>@Photoshop courses a…</h6>
<h6 className="spiderman">Feb. 2, 2021</h6>
<br></br>
<br ></br>
<RiTwitterFill/>
<h6 >Are you Team Minimalism or Team</h6>
<h6>Maximalism? We put these</h6>
<h6> contrasting aesthetics to the test and</h6>
<h6>bring you some of t…</h6>
<h6 className="spiderman">Jan. 28, 2021</h6>
</Col>
<Col lg={3}>
<h3>Opening Hours</h3>
<h5 className="spiderman">About us</h5>
  <h5 className="spiderman">Mon-Tues : 6.00 am-10.00pm</h5>
  <h5 className="spiderman">Wednes-Thurs : 8.00am-6.00pm</h5>
  <h5 className="spiderman">Fri : 3.00pm-8.00pm</h5>
  <h5 className="spiderman">Sun : Closed</h5>
</Col>

</Row>

<Row >
<Col  className="thanos" lg={4}>
<h3>Call Us Now</h3>
<h6>+91-7856584565</h6>
<h6>040-8565247</h6>
</Col>

<Col  className="thanos" lg={4}>
  <h1>Connect With Us</h1>
  <SocialIcon url="https://twitter.com/jaketrent" />
  <SocialIcon url="https://facebook.com/jaketrent" />
  <SocialIcon url="https://instagram.com/jaketrent" />
  <SocialIcon url="https://whatsapp.com/jaketrent" />
  <SocialIcon url="https://youtube.com/jaketrent" />

</Col>

<Col  className="thanos" lg={4}>
<h3>Subscribe Us</h3>
<Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-4"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
</Col>

</Row>
</Col>
</Row>
</Container>

<Container>
  <Row className="wanda">
  <Col lg={6}>
  <p>Copyright  © 2016 ThemeMascot. All Rights Reserved</p>
  </Col>
    <Col lg={6}>
    
     
     <span className="log" >FAQ</span>
     <span className="log">|</span>
     <span className="log">Help Desk</span>
     <span className="log">|</span>
     <span className="log">Support</span>
     
    </Col>

   
  </Row>
</Container>



            </div>
        )
    }
}
export default Project1