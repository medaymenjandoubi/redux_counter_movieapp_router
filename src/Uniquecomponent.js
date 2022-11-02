import React from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
const Uniquecomponent = ({moviedata}) => {
    const {ID}=useParams()
    /* const findelement = moviedata.find((el)=>el.id===Number(ID)) */
    const film= moviedata.find((el) => el.id === Number(ID))
    console.log('findelement',film)
    console.log('moviedata',moviedata)
  return (
    <div style={{display : 'flex', justifyContent : 'center' , alignItems :'center'}}>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={film.image} />
        <Card.Body>
        <Card.Title>{film.name}</Card.Title>
        <Card.Text>
        {film.description}
        </Card.Text>
      </Card.Body>
    </Card>
      <iframe  title='video' src={film.video} style={{width: '800',height : '315'}}>
      </iframe>

    
    </div>
  )
}

export default Uniquecomponent