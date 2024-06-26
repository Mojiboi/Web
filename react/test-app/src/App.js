import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { data } from './Data/userdata';
// import React, { useState, useEffect } from 'react';


let arr = ['Cat','Cherry','Peach']
// function App() {
//   // const [username,setUsername] = useState('');
//   // useEffect(()=>{
//   //   if(!username){
//   //     const user = window.prompt("please Enter username: ");
//   //     setUsername(user);
//   //   }
//   // },[username]);
//   const username = 'Moazzam';
//   return (
//     <div className="App">
//       <Header/>
//       <h1 className='glass-effect'>Welcome {username}</h1>
//       <div className='card-div'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
//       {/* <button onClick={show()}>Fav-things</button> */}
//       <Footer/>
//     </div>
//   );
// }
function App() {
  const username = 'Moazzam';
  let HeaderInfo = {
    Type:'test',
    date:'26/06/34',
    user:'MoazzamMirza'
  }
  return (
    <div className="App">
      {/* <Header text="This text is generated using props"/> */}
      <Header Info={HeaderInfo} />
      <h1 className='glass-effect'>Welcome {username}</h1>
      {/* <Container fluid>
        <Container>
          <Row>
            <Col>
              <h1> My Products </h1>
            </Col>
          </Row>
          <Row>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Container>
        <Row>
          {data.map((v,i)=>{return(
            <Usersdata pitems={v} key={i} />
          )})}
        </Row>
      </Container>
      <Footer></Footer>
      {/* <Footer/> */}
    </div>
  );
}


// function show() {
//   return(
//     <div>
//       <label>Your Fav things are: </label>
//         {arr.map((v)=>{
//           return(<div>
//             {v}
//             </div>)
//         })}
//     </div>
//     );
// }
export default App;


function Usersdata({pitems}){
  return(
  <div className='col-lg-3 mb-4'>
      <Card>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>
            {pitems.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  </div>
  );
}