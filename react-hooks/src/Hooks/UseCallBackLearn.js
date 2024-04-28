import React, {useCallback,useState} from "react";
import { Input,Card,CardBody,CardHeader,Row,Col } from "reactstrap";
function UseCallBackLearn () {
const [name,setName]=useState('');
const handleNameChange = useCallback( event=> {
setName(event.target.value)
},[setName])
    return(
        <>
        <Row>
        <Card>
            <CardBody>
            <Input type="text" name="name" id="name" value={name} onChange={handleNameChange}></Input>
            </CardBody>
        </Card>
        </Row>
        </>
    )
}

export default UseCallBackLearn;