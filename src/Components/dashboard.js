import React,{useEffect,useState} from 'react'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from '../firebase'
import {useAuth} from '../contexts/AuthContext'
import { Dropdown,Spinner,Row,Col,Container,Accordion,Card} from 'react-bootstrap'
import MainGraph from './maingraph' 

export default function Dashboard() {
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [locs,setLocs] = useState()
    const {currentUser} = useAuth()
    const [totalData,setTotalData] = useAuth()
    //const listItems = useAuth()
    useEffect(() => {
        const DBref = firebase.database().ref().child("users").child(currentUser.uid)
        DBref.on('value',(snapshot)=>{
            var myUser = (snapshot.val())
            var locs = myUser.pairedLocations
            setFname(myUser.First_Name)
            setLname(myUser.Last_Name)
            console.log(Object.keys(locs).length)
            console.log(fname)
            var locsID = []
            var LL =[]
            setLocs("")
            for (var key in locs) {
                if (locs.hasOwnProperty(key)) {
                    console.log(key + " -> " + locs[key].id);
                    locsID.push(locs[key].id)
                }
            }
            if(locsID.length>0){
                for(var l in locsID){
                    console.log(locsID[l])
                const locsref = firebase.database().ref().child("Locations").child(locsID[l])
                locsref.on('value',(snapshot)=>{
                    var myL = snapshot.val()
                    console.log("my loc is")
                    console.log(myL)
                    LL.push(myL)
                })
                setLocs(LL)
               // listItems = locs.map((d) => <li key={d.name}>{d.name}</li>);
            }
            }
    })}, [])

    function List({}) {
        const itemList = locs.map((item) => (
          <li>
            {item.name}
          </li>
        ));
        return (
          <div style={{backgroundColor:"#fd8708",display:"flex",marginLeft:"auto",marginRight:"auto"}}>
            <ol style={{ listStyleType: "none" }}>{itemList}</ol>
          </div>
        );
      }

    return (
        <>
        <Container style={{marginLeft:"0px",padding:"0px"}}>
            <Row md={4} style={{marginLeft:"0px"}}>
                <Col style={{maxWidth:"10vw",height:"100vh",backgroundColor:"black",padding:"0px"}}>
                    <img src={AppLogoBW} alt="logo"style={{width:"6vw",display:"flex",marginRight:"auto",marginLeft:"auto",paddingBottom:"50px",paddingTop:"50px"}}></img>
                <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{color:"white",borderRadius:"0px",textAlign:"center"}}>
                        Dashboard
                        </Accordion.Toggle>
                </Accordion>
                <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{color:"white",borderRadius:"0px",textAlign:"center"}}>
                        Locations
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center"}}>
                        <Card.Body>Hello! I'm the body</Card.Body>
                        {/* <Card.Body>{locs}</Card.Body> */}
                        </Accordion.Collapse>
                </Accordion>
                <List />
                <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{color:"white",borderRadius:"0px",textAlign:"center"}}>
                        Devices
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center"}}>
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center"}}>
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                </Accordion>
                <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{color:"white",borderRadius:"0px",textAlign:"center"}}>
                        About
                        </Accordion.Toggle>
                </Accordion>
                <p style={{color:"grey",backgroundColor:"black",display:"flex",marginTop:"auto",paddingTop:"50vh",textAlign:"center",padding:"8px",fontFamily:"Segoe UI",fontSize:"15px",fontWeight:"lighter",}}>
                    Copyright© 2021 SDD. All rights reserved.</p>
                </Col>
                <Col xs={6} style={{paddingLeft:"0px"}}>
                <div style={{marginRight:"auto",backgroundColor:"Black",width:"90vw",marginLeft:"0px",height:"50px",textAlign:"center",justifyContent:"center",display:"inline-block"}}>
                <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter",display:"flex"} }>
                    <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter",marginLeft:"auto"}}>Dashboard </h1>
                    
                    <Dropdown style={{display:"flex",marginTop:"auto",marginBottom:"auto",marginLeft:"auto",backgroundColor:"Black"}}>
                        <Dropdown.Toggle id="dropdown-basic"style={{backgroundColor:"Black",borderColor:"Black",fontFamily:"Segoe UI",fontWeight:"lighter"}}>
                            {fname} {lname} <Spinner animation="grow" variant="success" size="sm" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:"black",color:"#fd8708"}}>
                            <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-1">Settings</Dropdown.Item>
                            <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-2">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
        </div>
        {/* <List/> */}
                </Col>
            </Row>
        </Container>
        </>
            
      )
}


