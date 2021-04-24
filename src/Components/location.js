import React,{useEffect,useState,Fragment,useRef} from 'react'
import { Dropdown,Spinner,Row,Col,Container,Accordion,Card,Alert} from 'react-bootstrap'
import AppLogoBW from './Assets/Images/AppLogoBW.jpg'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link,useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Map from './map'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EnhancedTable from './violationsTable'
import { TableSortLabel } from '@material-ui/core';

export default function Location(props) {

var Locations = []
const History = useHistory()
const L = props.location.state.some;
var theLocation = props.location.state.some
const [Tot,SetTot] = useState(0)
const av =theLocation.activeViolations
const days = Object.values(theLocation.violations).length
const avg = av/days
console.log(av)
console.log(days)
console.log(avg)
console.log(theLocation)
for (var i =0;i<L.length;i++){
    var found = false;
    for(var k=0;k<Locations.length;k++){
        if(Locations[k].id===L[i].id){
            found=true
        }
    }
    if(!found){
        Locations.push(L[i])
    }
} 
// for(var k=0;k<theLocation.violations.length;k++){
//             for(var i in theLocation.violations[i]){
//                 console.log(i)
//                 SetTot(Tot+1)
//             }
//         }
useEffect(()=>{
    for(var k=0;k<theLocation.violations.length;k++){
        for(var i in theLocation.violations[i]){
            console.log(i)
            SetTot(Tot+1)
        }
    }
},[Tot])

    return (
        <>
        <Container style={{marginLeft:"0px",padding:"0px"}}>
    <Row md={4} style={{marginLeft:"0px"}}>
        <Col style={{maxWidth:"10vw",height:"110vh",backgroundColor:"black",padding:"0px"}}>
            <img src={AppLogoBW} alt="logo"style={{width:"6vw",display:"flex",marginRight:"auto",marginLeft:"auto",paddingBottom:"50px",paddingTop:"50px"}}></img>
                <Card style={{backgroundColor:"#fd8708",borderRadius:"0px",textAlign:"center",color:"white"}}>
                <Card.Body onClick={dash}>
                                Dashboard
                            </Card.Body>
                    <Card.Body>
                        <p>Locations</p>
                    </Card.Body>
                    <Card.Body >
                        Analytics
                    </Card.Body>
                    <Card.Body >
                        Devices
                    </Card.Body>
                    <Card.Body >
                        About
                    </Card.Body>
                </Card>
       
        <p style={{color:"grey",backgroundColor:"black",display:"flex",marginTop:"auto",paddingTop:"50vh",textAlign:"center",padding:"8px",fontFamily:"Segoe UI",fontSize:"15px",fontWeight:"lighter",}}>
            Copyright© 2021 SDD. All rights reserved.</p>
        </Col>
        <Col xs={6} style={{paddingLeft:"0px"}}>
        <div style={{marginRight:"auto",backgroundColor:"Black",width:"90vw",marginLeft:"0px",height:"50px",textAlign:"center",justifyContent:"center",display:"inline-block"}}>
        <div style={{marginTop:"auto",marginBottom:"auto",color:"White",fontFamily:"Segoe UI",fontSize:"38px",fontWeight:"lighter",display:"flex"} }>
    <h1 onClick="loadInItems()" style={{fontFamily:"Segoe UI",fontSize:"30px",fontWeight:"lighter",marginLeft:"auto"}}>{theLocation.name} @ {theLocation.area}</h1>
            
            <Dropdown style={{display:"flex",marginTop:"auto",marginBottom:"auto",marginLeft:"auto",backgroundColor:"Black"}}>
                <Dropdown.Toggle id="dropdown-basic"style={{backgroundColor:"Black",borderColor:"Black",fontFamily:"Segoe UI",fontWeight:"lighter"}}>
                    {props.location.state.fn} {props.location.state.ln} <Spinner animation="grow" variant="success" size="sm" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{backgroundColor:"black",color:"#fd8708"}}>
                    <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-1">Settings</Dropdown.Item>
                    <Dropdown.Item style={{backgroundColor:"black",color:"white",fontFamily:"Segoe UI",fontWeight:"lighter"}} href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
</div>
{/* style={{display:"flex",justifyContent:"center",minWidth:"90vw",fontFamily:"Segoe UI",fontWeight:"lighter"}} */}
<div style={{display:"flex",minWidth:"90vw",fontFamily:"Segoe UI",fontWeight:"lighter",paddingTop:"20px"}}>
    <Grid style={{width:"40vw",paddingLeft:"2.5vw"}}>
    <Paper style={{width:"40.5vw",height:"24vw",justifyContent:"center",boxShadow:"0px 11px 15px -7px grey"}}><img src={theLocation.locImg} style={{width:"40vw",padding:"1vw"}}/></Paper>
    </Grid>
    <div style={{minWidth:"2vw"}}>
    <h1>  </h1>
    </div>
    <Grid style={{width:"40vw",paddingLeft:"5vw"}}>
        <Paper style={{width:"40vw",justifyContent:"center",height:"24vw",paddingLeft:"1vw",paddingRight:"2.5vw",boxShadow:"0px 11px 15px -7px grey"}}>
        <div style={{display:"flex"}}>
        <h5 style={{paddingTop:"30px",fontFamily:"Segoe UI",fontWeight:"lighter"}}>Name:    {theLocation.name}</h5>
        <IconButton style={{paddingTop:"30px",marginLeft:"auto"}} edge="end" aria-label="delete">
            <EditIcon/>
        </IconButton>
        </div>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Area:  {theLocation.area}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>City:  {theLocation.city}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Last Updated on:   {theLocation.LastUpdated}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Location ID:   {theLocation.id}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Longitude: {theLocation.long}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Latitude: {theLocation.lat}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Total violation(s) Recorded: {theLocation.activeViolations}</h5>
        <h5 style={{fontFamily:"Segoe UI",fontWeight:"lighter"}}>Avg. Violation per day: {avg}</h5>
        </Paper>
    </Grid>
    </div>
            <div style={{display:"flex",minWidth:"43vw",marginLeft:"auto",marginRight:"auto",paddingLeft:"2.5vw",paddingTop:"50px",boxShadow:"0px 11px 15px -7px grey"}}><EnhancedTable vs={theLocation.violations}/>

            </div>
            
        </Col>
    </Row>
</Container>
</>
    )
    async function gettot(){
        var tot =0
        for(var k=0;k<theLocation.violations.length;k++){
            for(var i in theLocation.violations[i]){
                tot+=1
            }
        }
        return tot
    }
    async function dash() {
        History.push({
            pathname: '/'
          })
        }
        // async function loc(v) {
        //     History.push({
        //         pathname: '/manageloc',
        //         state: { fn:props.location.state.fn,ln:props.location.state.ln,some: v }
        //       })
        //     }
}