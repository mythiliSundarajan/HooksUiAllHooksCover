import React, { useRef, useState } from "react";
import { Row,Card,CardBody,CardHeader,Col,Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import TabOneCom from './Com/TabOneCom';
import TabTwoCom from './Com/TabTwoCom';
function UseRefLearn ()  {
    const [activeTab,setActiveTab] =useState('1');
    const tabRef =useRef(null);
    const useRefUpdate =()=> {
        setActiveTab('1');
        tabRef.current.focus();
      }
    return (
        <>
        <Row>
            <Card>
                <CardHeader>UseRef</CardHeader>
                <CardBody>
                <Col>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab ==='1' ? 'active':''} onClick={()=>useRefUpdate} >
                             Tab 1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab ==='2' ?'active':''} onClick={()=>setActiveTab('2')}>
                            Tab 2
                        </NavLink>
                    </NavItem>
                   
                </Nav>
                <TabContent activeTab={activeTab}>
                        <TabPane tabId={'1'}><TabOneCom ref={tabRef}></TabOneCom></TabPane>
                        <TabPane tabId={'2'}><TabTwoCom></TabTwoCom></TabPane>

                    </TabContent>
            </Col>
                </CardBody>
            </Card>
           
        </Row>
        </>
    )
}

export default  UseRefLearn;