import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
const Element = ({moviedata}) => {
    const {counter}=useSelector((state)=>state.counter)
    console.log(counter,'cest le compteur')
    console.log(moviedata,'cestnotredata')
    const filmm= moviedata.find((el) => el.id === Number(counter))
    console.log('findelement',filmm)
  return (
    <div style={{display : 'flex', justifyContent : 'center' , alignItems :'center'}}>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={filmm.image} />
        <Card.Body>
        <Card.Title>{filmm.name}</Card.Title>
        <Card.Text>
        {filmm.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Element





