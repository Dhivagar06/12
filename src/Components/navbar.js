import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './navbar.css'


function BasicExample() {

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`${selectedKey} is currently not available `)}
      className='navbar'
    >
      <Nav.Item>
      <img src={require('../image/ktm.jpeg')} className='img' />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" className='home'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/service" className='service'>Service</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Customer Call"  className='Customer'>Customer Call</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;