import React,{useEffect,useState,Fragment} from 'react'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from '../firebase'
import {useAuth} from '../contexts/AuthContext'
import { Dropdown,Spinner,Row,Col,Container,Accordion,Card} from 'react-bootstrap'
import MainGraph from './maingraph' 
import SideCard from './sideCards'

export default function Dashboard() {
    const [fname,setFname] = useState(1)
    const [lname,setLname] = useState()
    // const [locs,setLocs] = useState(2)
    const [locsNames,setLocsNames] = useState([])
    const [locIDs,setLocIDs] = useState([])
    const [gLocations,setGLocations] = useState([])
    const {currentUser} = useAuth()
    // const [totalData,setTotalData] = useState()
    
    //const listItems = useAuth()
    useEffect(() => {
        
        const db = firebase.database().ref().child("users")
        db.child(currentUser.uid).once('value').then(function(snap){
            var iDs =[]
            var data = snap.val()
            setFname(data.First_Name)
            setLname(data.Last_Name)
            var parent = Object.values(data.pairedLocations)
            for(var i=0;i<parent.length;i++){
                if(locIDs.indexOf(parent[i].id)==-1){
                setLocIDs(locIDs=>[...locIDs,parent[i].id])
                iDs.push(parent[i].id)
            }}
            var Ns = []
            for(var t =0;t<iDs.length;t++){
                const dbt = firebase.database().ref().child("Locations")
                dbt.child(iDs[t]).once('value').then(function(sap){
                    var instLocation =  sap.val()
                    if(Ns.length<=iDs.length){
                    setGLocations(gLocations=>[...gLocations,instLocation])
                    setLocsNames(locsNames=>[...locsNames,instLocation.name])
                    Ns.push(instLocation.name)
            }
            }).catch(err2 => console.log(err2))
            }
        }).catch(err => console.log(err))
    
    },[])
    //     const DBref = firebase.database().ref().child("users").child(currentUser.uid)
    //     DBref.on('value',(snapshot)=>{
    //         var myUser = (snapshot.val())
    //         var locs = myUser.pairedLocations
    //         setFname(myUser.First_Name)
    //         setLname(myUser.Last_Name)
    //         console.log(Object.keys(locs).length)
    //         console.log(fname)
    //         var locsID = []
    //         // var LL =[]
    //         // setLocs("")
    //         for (var key in locs) {
    //             if (locs.hasOwnProperty(key)) {
    //                 console.log(key + " -> " + locs[key].id);
    //                 locsID.push(locs[key].id)
    //             }
    //         }
    //         if(locsID.length>0){
    //             //  setLocs(locsID)
    //              var bL = []
    //             for(var l in locsID){
    //                 console.log(locsID[l])
    //             const locsref = firebase.database().ref().child("Locations").child(locsID[l])
    //             locsref.on('value',(snapshot)=>{
    //                 var myL = snapshot.val()
    //                 console.log("my loc is")
    //                 console.log(myL.name)
    //                 bL.push(myL)
    //                 //locsName.push(myL.name)
    //             })
    //             // setLocs(LL)
               
    //         }
    //         setLocsName(bL)
    //         }
    // } )
    // , [])
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
                        {/* <SideCard loc={locs}/> */}
                        <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} open={false} eventKey="0" style={{color:"white",borderRadius:"0px",textAlign:"center",width:"10vw",backgroundColor:"black"}}>
                        Locations
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center"}}>
                        <SideCard locs={gLocations} />
                        {/* <p>hey lol</p> */}
                        </Accordion.Collapse>
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
                </Col>
            </Row>
        </Container>
        </>
            
      )
}


