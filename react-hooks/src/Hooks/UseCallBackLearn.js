import React, {useCallback,useState} from "react";
import { Input,Card,CardBody,CardHeader,Row,Col, Label } from "reactstrap";
function UseCallBackLearn () {
const [name,setName]=useState('');
const handleNameChange = useCallback( event=> {
setName(event.target.value)
},[setName])
    return(
        <>
        <Row>
        <Card>
            <CardHeader>Use Call Back</CardHeader>
            <CardBody>
                <Row>
                    <Col md="12">
                <Label>Name</Label>
                    <Input type="text" name="name" id="name" value={name} onChange={handleNameChange}></Input>

                    </Col>
                </Row>
            </CardBody>
        </Card>
        </Row>
        </>
    )
}

export default UseCallBackLearn;