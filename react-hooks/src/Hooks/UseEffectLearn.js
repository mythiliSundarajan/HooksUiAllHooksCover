import React ,{useEffect, useState,useContext} from "react";
import { Card,CardBody,CardHeader,Row,Col } from "reactstrap";
import {cardTtileContext} from '../App'
function UseEffectLearn () {
const [userNameList,setUserNameList] =useState([]);
const patchTitle =useContext(cardTtileContext);
useEffect (()=> {
    const updateUsers = [
        // copy the current users state
        ...userNameList,
        // now you can add a new object to add to the array
        {
          // using the length of the array for a unique id
          id: userNameList.length + 1,
          // adding a new user name
          name: "Steve",
          // with a type of member
          type: "member"
        },
        {
            // using the length of the array for a unique id
            id: userNameList.length + 1,
            // adding a new user name
            name: "Steve",
            // with a type of member
            type: "member"
          }
      ];
      setUserNameList(updateUsers)
    } , [ ] );
    return (
        <div>
            <Row>
                <Card>
                    <CardHeader>{patchTitle.title2}</CardHeader>
                    <CardBody>
                    {userNameList.map((item,key) => (
            <><div key={key}>{item.name}</div></>
         ))}
                    </CardBody>
                </Card>
            </Row>
         
        </div>
    )
}

export default UseEffectLearn;