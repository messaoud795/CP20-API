import React from "react";
import { Card } from "react-bootstrap";
import './ContactCard.css'

function ContactCard({ user }) {
  console.log(user);
  return (
    <Card style={{ width: "18rem", margin: "10px" }} className='ContactCard'>
      <Card.Body>
        <Card.Title className='title'>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {user.company.name}
        </Card.Subtitle>
        <Card.Text>{'Email :'+ user.email}</Card.Text>
        <Card.Text>{'Tel :'+user.phone}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ContactCard;
