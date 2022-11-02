import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Movieelement = ({movieelement,handledelete}) => {
    console.log('movieelement',movieelement)
  return (
    <div>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movieelement.image} />
        <Card.Body>
        <Card.Title>{movieelement.name}</Card.Title>
        <Card.Text>
        {movieelement.description}
        </Card.Text>
        <Button variant="danger" onClick={()=>handledelete(movieelement.id)}>delete</Button>
        <Button>
          <Link  to={`/movielist/${movieelement.id}`}>
            Check film
          </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movieelement