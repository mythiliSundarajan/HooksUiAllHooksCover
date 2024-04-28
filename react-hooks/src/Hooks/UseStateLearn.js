import React ,{useState,useContext} from 'react'
import {cardTtileContext}  from '../App'
import { Input, Row,Col, Label ,Card,CardBody,CardHeader} from 'reactstrap'

function useStateLearn() {
    const [name,setName]=useState('');
    const patchContext =useContext(cardTtileContext)
  return (
    <div>
        <Row>
        <Col>
          <Card>
            <CardHeader>{patchContext.title1}</CardHeader>
            <CardBody>
            <Label>Name</Label>
            <Input type='text' id="name" value={name} onChange={(e)=>setName(e.target.value)} ></Input>
            </CardBody>
          </Card>
          </Col>
        </Row>
    </div>
  )
}

export default useStateLearn
