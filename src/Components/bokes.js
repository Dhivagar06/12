import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './navbar.css';



function Bike() {
  return (
    <>

<Card className="bg-dark text-white baner">
      <Card.Img src={require('../image/abc.webp')} alt="Card image" className='fround'/>
      <Card.ImgOverlay>
        <Card.Title><h1 className='ktm'>KTM RC </h1></Card.Title>
        <Card.Text className='track'>
      <b>  RACETRACK DNA <br/>FOR THE STREET</b>
        </Card.Text>
        <Card.Text>
        <Button variant="outline-warning" className='book'>BOOK NOW</Button>
         <Button variant="outline-warning" className='visit'>VISIT E-SHOWROOM</Button>


        </Card.Text>
      </Card.ImgOverlay>
    </Card>


    <div className='flex'>
      <Card style={{ width: '13rem' }} className='div'>
        <Card.Img src={require('../image/bike1.jpeg')} className='images ktm' />
        <Card.Body>
          <Card.Title><b> KTM 390 ADVENTURE</b></Card.Title>
          <Card.Text>The KTM 390 Adventure offers a good balance of power and agility, making it suitable for various riding conditions. It has ample low-end torque, making it well-suited for both on-road and off-road riding.</Card.Text>
          <Button className='button'><b>EXPOLRE NOW </b></Button>
        </Card.Body>
      </Card>


      <Card style={{ width: '13rem' }} className='div'>
        <Card.Img src={require('../image/bike2.jpeg')} className='images ktm' />
        <Card.Body>
          <Card.Title><b>DUKE 390</b></Card.Title>
          <Card.Text>The Duke 390 is powered by a liquid-cooled, single-cylinder, four-stroke engine with a displacement of 373.2cc. It's equipped with fuel injection technology and produces a substantial amount of power for its category.</Card.Text>
          <Button className='buttonfirst'><b>EXPOLRE NOW </b></Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '13rem' }} className='div'>
        <Card.Img src={require('../image/bike3.jpeg')} className='images ' />
        <Card.Body>
          <Card.Title><b className=''>KTM 390</b></Card.Title>
          <Card.Text>The KTM 390 Duke is known for its impressive performance within the naked sportbike segment. It offers strong acceleration and a top speed that exceeds 100 mph, making it a spirited and fun-to-ride bike.</Card.Text>
          <Button className='button'><b>EXPOLRE NOW</b></Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '13rem' }} className='div'>
        <Card.Img src={require('../image/bike4.jpeg')} className='images' />
        <Card.Body>
          <Card.Title><b>KTM 125</b></Card.Title>
          <Card.Text> While the 125cc engine is relatively small, the KTM 125 Duke offers lively and enjoyable performance for riders looking for a lightweight and agile motorcycle. It is suitable for urban and city riding.</Card.Text>
          <Button className='buttonlast'><b>EXPOLRE NOW </b></Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default Bike;
