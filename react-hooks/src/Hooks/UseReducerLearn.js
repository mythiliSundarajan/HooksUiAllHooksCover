/* eslint-disable default-case */
import React from "react";
import { useReducer } from "react";
import { Button,Label ,Card,CardBody,CardHeader,Row,Col, Input} from "reactstrap";
const initialCounterState = {
    count: 0
  }
function reducerUpdate (state,action){
    switch(action.type){
        case 'add':
            return {...state,count:state.count+1}
        case 'minus':
            return {...state,count:state.count-1}
       default :
       return state
    }
}
function detailsUpadate (state,action) {
    switch(action.type){
        case 'name':
            return {...state ,name:action.name};
       case 'mobile' :
        return {...state,mobile:action.mobile};
        default : 
        return state;
    }
}
function UseReducerLearn () {
const [count,setCount]=useReducer(reducerUpdate,initialCounterState);
const [details,setDetails]=useReducer(detailsUpadate,{name:'',mobile:''});
return (
    <>
    <Row>
        <Col>
        <Card>
            <CardHeader>Use Reducer</CardHeader>
            <CardBody>
                <Button type="button" onClick={()=>setCount({type:'add'})}>+</Button>
                <Label>{count.count}</Label>
                <Button type="button" onClick={()=>setCount({type:'minus'})}>-</Button>
               
                <Label>Name</Label>
                <Input type="text" id="name" name="name" value={details.name} onChange={(e)=>setDetails({type:'name',name:e.target.value})}>
                </Input>
                <Label>Mobile</Label>

                <Input type="text" id="mobile" name="mobile" value={details.mobile} onChange={(e)=>setDetails({type:'mobile',mobile:e.target.value})}>
                </Input>
            </CardBody>
        </Card>
        </Col>
    </Row>
     
    </>
)
}

export default UseReducerLearn;