import React,{ useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsPuppy } from '../actions/puppyActions';
import {Nav, Col, Row, Tab, Carousel} from 'react-bootstrap';
import '../App.css';

const PuppyPage = (props) => {

    const puppyDetails = useSelector(state => state.puppyDetails);
    const { puppy, loading, error } = puppyDetails;
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPuppy(props.match.params.id));
      return () => {
          //
      }
  }, []);
  const handleAddtoDeposit = () => {
      props.history.push("/deposit/" + props.match.params.id)
  }

    return <div className="">
      
  <div className="PuppyPage">
      <Link to="/PuppiesPage">
    <button className="back-to-result">
      Back to Puppies to Adopt
    </button>
    </Link>
       
       

    <div className="">
      
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          
    <div className="details">
     <h1> {puppy.name} </h1>


     
    <div className="">{puppy.puppyName} is a wonderful {puppy.discription}.
    <br />
    <br />
    {/* <div >
    <img src={puppy.image} alt="puppy" className=""></img>
    </div> */}
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    
      <Nav variant="pills" className="flex-row">
        
        <Nav.Item>
          <Nav.Link eventKey="first">Photos of {puppy.puppyName}</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            {puppy.video !== "N/A" ? 
            <Nav.Link eventKey="second">Video of {puppy.puppyName}</Nav.Link>
            :
            <div className="">  </div>
        } 
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p>{puppy.name} pic one.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={puppy.slideimage1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>L  </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src={}
      alt="Third slide"
    /> */}
{puppy.slideimage2}
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <ReactPlayer>
          {puppy.video}
          </ReactPlayer>

        </Tab.Pane>
      </Tab.Content>

  </Row>
</Tab.Container>
    </div>

    <br />
    <div className="details-info">
     
    <div className="PuppyPageLayout">
      <Col>
      
              Hello, My name is {puppy.puppyName}
          <br />
           
            I was born on: {puppy.dob}
     
            <br /> 

   My color right now is: {puppy.color}
      
        <br />
            
      
            I come with: {puppy.reg}
          
           
        
           
<br />
      
            I am a:  {puppy.gender}
       <br />
            My adoption price :  ${puppy.price}
           <br />

     
       
       
              
            Adoption Status:      {puppy.rank === "Available" ? 
           <div className="blinking" id="Available"> { puppy.rank} </div>
            :
            <div className="blinking" id="Sold"> { puppy.rank} </div>
        }
   

            {/* {puppy.status == "Available" ? 
            <button onClick={handleAddtoDeposit} className="button">
                Purchase Options
            </button>
            :
            <div className="li"> Sorry, Found My Family </div>
        } */}
        
        </Col>
        <Col>
       
        {puppy.rank === "Available" ? 
           <div id="Title"><u> My Adoption price includes: </u> </div>
            :
            <div id="Title"><u> Adoption price included </u>   </div>
        }
        
      
       
<br />

<Row>
 
        Limited AKC Registration,
        </Row>
        <Row>
        AKC Reunite microchipped and prepaid subscription,
        </Row>
        <Row>
          4.5lb bag of Open Farm Puppy food,
          </Row>
          <Row>
          One bag of Open farm training treats,
        </Row>
        <Row>
        One canvas strap harness and a leash,
        </Row>
        <Row>
        Puppies favorite toy,
        </Row>
        <Row>
        Up to date on shots with two seperate Vet checks,
        </Row>
      <Row>
        AKC puppy pamphlet,
        </Row>
        <Row>
        Spay and neuter contract,
       </Row>
        XL Luxuary Bath towel with mom and dads scent
 
   
        </Col>
      
       </div>
    </div>
    </div>
    )
    }
      <br />
        <br />
    </div>
    </div>
    </div>
}
export default PuppyPage;